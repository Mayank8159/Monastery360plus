import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { DeviceOrientationControls } from "../lib/three-examples/DeviceOrientationControls.js";
import "./ThreeSixty.css"; // Optional: for custom cursor styling

const images = [
  { id: 1, name: "Monastery 1", url: "/image.jpg" },
  { id: 2, name: "Monastery 2", url: "/image2.jpg" },
  { id: 3, name: "Monastery 3", url: "/image3.jpg" },
  { id: 4, name: "Rumtek Monastery", url: "/image5.png" },
];

const ThreeSixty = () => {
  const mountRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(images[0].url);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [isVR, setIsVR] = useState(false);

  const handlePermission = () => {
    if (typeof DeviceOrientationEvent?.requestPermission === "function") {
      DeviceOrientationEvent.requestPermission()
        .then((state) => {
          if (state === "granted") setPermissionGranted(true);
        })
        .catch(console.error);
    } else {
      setPermissionGranted(true);
    }
  };

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    let controls;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

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

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const textureLoader = new THREE.TextureLoader();
    let texture = textureLoader.load(currentImage);
    let material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Detect motion sensors and enable VR
    if (isMobile) {
      window.addEventListener(
        "deviceorientation",
        (event) => {
          if (event.alpha !== null) {
            const vrReady = !isIOS || permissionGranted;
            setIsVR(vrReady);
            if (vrReady) {
              controls = new DeviceOrientationControls(camera);
              controls.connect();
            }
          }
        },
        { once: true }
      );
    }

    const onMouseDown = (e) => {
      if (isVR) return;
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };
    const onMouseUp = () => {
      isDragging = false;
    };
    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      sphere.rotation.y += deltaX * 0.005;
      sphere.rotation.x += deltaY * 0.005;
      sphere.rotation.x = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, sphere.rotation.x)
      );

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const canvas = renderer.domElement;
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseUp);
    canvas.addEventListener("mousemove", onMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      if (isVR && controls) controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const updateTexture = () => {
      material.transparent = true;
      material.opacity = 0;

      const newTexture = textureLoader.load(currentImage, () => {
        material.map.dispose();
        material.map = newTexture;
        material.needsUpdate = true;

        let opacity = 0;
        const fadeIn = () => {
          opacity += 0.05;
          material.opacity = opacity;
          if (opacity < 1) requestAnimationFrame(fadeIn);
        };
        fadeIn();
      });
    };
    updateTexture();

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
      <div
        ref={mountRef}
        className={`absolute inset-0 z-0 ${!isVR ? "cursor-grab active:cursor-grabbing" : ""}`}
      />

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

      <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg shadow-md">
        <h1 className="text-lg font-semibold text-gray-800">Monastery360 Viewer</h1>
        <p className="text-sm text-gray-600">
          {isVR ? "Move your phone to explore!" : "Click and drag to explore!"}
        </p>
      </div>

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