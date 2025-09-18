// src/pages/ThreeSixty.jsx
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const images = [
  { id: 1, name: "Monastery 1", url: "/image.jpg" },
  { id: 2, name: "Monastery 2", url: "/image2.jpg" },
  { id: 3, name: "Monastery 3", url: "/image3.jpg" },
  { id: 4, name: "Monastery 4", url: "/image5.png" },
];

const ThreeSixty = () => {
  const mountRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(images[0].url);

  useEffect(() => {
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

    // Mouse drag rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (event) => {
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
      renderer.render(scene, camera);
    };
    animate();

    // ✅ Reload texture on image change
    const updateTexture = () => {
      const newTexture = textureLoader.load(currentImage, () => {
        material.map.dispose(); // cleanup old texture
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

      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();

      if (mountRef.current && canvas) {
        mountRef.current.removeChild(canvas);
      }
    };
  }, [currentImage]); // rerun when currentImage changes

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 360 Viewer */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
      />

      {/* Info Box */}
      <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg shadow-md">
        <h1 className="text-lg font-semibold text-gray-800">
          Monument360 Viewer
        </h1>
        <p className="text-sm text-gray-600">Click and drag to explore</p>
      </div>

      {/* ✅ Image Selector */}
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
