import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const imageWidth = 800;
    const imageHeight = 600;
    renderer.setSize(imageWidth, imageHeight);
    mountRef.current.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('pfp.jpeg');
    const geometry = new THREE.PlaneGeometry(imageWidth, imageHeight);
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 1000;
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      plane.rotation.y = mouseX * 0.5;
      plane.rotation.x = mouseY * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '800px', height: '600px' }} />;
};

export default ThreeScene;
