// src/pages/ThreeSixty.jsx
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { DeviceOrientationControls } from "../lib/three-examples/DeviceOrientationControls.js";
import "./ThreeSixty.css"; // A new CSS file for custom cursor

const images = [
  { id: 1, name: "Monastery 1", url: "/image.jpg" },
  { id: 2, name: "Monastery 2", url: "/image2.jpg" },
  { id: 3, name: "Monastery 3", url: "/image3.jpg" },
  { id: 4, name: "Monastery 4", url: "/image5.png" },
];

const ThreeSixty = () => {
  const mountRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(images[0].url);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [isVR, setIsVR] = useState(false);

  // Function to handle the permission request (for iOS)
  const handlePermission = () => {
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      DeviceOrientationEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            setPermissionGranted(true);
          } else {
            console.error("Permission denied for device orientation.");
          }
        })
        .catch(console.error);
    } else {
      setPermissionGranted(true);
    }
  };

  useEffect(() => {
    // Check for mobile and iOS devices
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    let controls;
    let hasMotionSensors = false;

    // Check if the device has motion sensors
    if (isMobile) {
      window.addEventListener(
        "deviceorientation",
        (event) => {
          if (event.alpha !== null) {
            hasMotionSensors = true;
          }
        },
        { once: true }
      );
    }

    // Determine if VR mode should be enabled
    let vrEnabled = isMobile && hasMotionSensors && (!isIOS || permissionGranted);
    setIsVR(vrEnabled);

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Sphere geometry
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const textureLoader = new THREE.TextureLoader();
    let texture = textureLoader.load(currentImage);
    let material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Initialize VR controls if VR is enabled
    if (isVR) {
      controls = new DeviceOrientationControls(camera);
      controls.connect();
    }

    // Mouse drag rotation is now conditional on desktop mode
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (event) => {
      if (isVR) return; // Disable mouse controls in VR mode
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };
    const onMouseUp = () => {
      isDragging = false;
    };
    const onMouseMove = (event) => {
      if (!isDragging) return;
      const deltaX = event.clientX - previousMousePosition.x;
      const deltaY = event.clientY - previousMousePosition.y;

      sphere.rotation.y += deltaX * 0.005;
      sphere.rotation.x += deltaY * 0.005;
      sphere.rotation.x = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, sphere.rotation.x)
      );

      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const canvas = renderer.domElement;
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseUp);
    canvas.addEventListener("mousemove", onMouseMove);

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (isVR && controls) {
        controls.update();
      }
      renderer.render(scene, camera);
    };
    animate();

    // Reload texture on image change
    const updateTexture = () => {
      const newTexture = textureLoader.load(currentImage, () => {
        material.map.dispose();
        material.map = newTexture;
        material.needsUpdate = true;
      });
    };
    updateTexture();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseUp);
      canvas.removeEventListener("mousemove", onMouseMove);
      if (controls) controls.disconnect();

      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();

      if (mountRef.current && canvas) {
        mountRef.current.removeChild(canvas);
      }
    };
  }, [currentImage, permissionGranted]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Conditionally apply the grab cursor for desktop */}
      <div
        ref={mountRef}
        className={`absolute inset-0 z-0 ${!isVR ? 'cursor-grab active:cursor-grabbing' : ''}`}
      />

      {/* Conditionally render the permission button for iOS */}
      {isVR && !permissionGranted && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <p className="text-white text-lg text-center mb-4">
            Tap to enable device motion for a full VR experience.
          </p>
          <button
            onClick={handlePermission}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Allow Motion Access
          </button>
        </div>
      )}

      {/* Info Box */}
      <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg shadow-md">
        <h1 className="text-lg font-semibold text-gray-800">
          Monument360 Viewer
        </h1>
        <p className="text-sm text-gray-600">
          {isVR ? "Move your phone to explore!" : "Click and drag to explore!"}
        </p>
      </div>

      {/* Image Selector */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg shadow-md">
        {images.map((img) => (
          <button
            key={img.id}
            onClick={() => setCurrentImage(img.url)}
            className={`px-3 py-1 rounded-md font-medium text-sm transition ${
              currentImage === img.url
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {img.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThreeSixty;