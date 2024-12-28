import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
// Import the image for mobile fallback
import image from '../assets/merch.png'; // Ensure the path is correct

const MODEL_URL = "./tshirt.glb"; // Ensure this file is in the `public` folder

const TShirtModel = () => {
  const { scene } = useGLTF(MODEL_URL);
  return <primitive object={scene} scale={6} />;
};

const TShirtAdvert = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width to determine if it's mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile if screen width is < 768px
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center border-2 border-blue-500 rounded-lg shadow-lg mx-auto mt-8 max-w-6xl">
      {/* 3D Model Section */}
      <div className="flex-1 flex justify-center items-center border-b-2 md:border-b-0 md:border-r-2 border-gray-300">
        {isMobile ? (
          <div className="text-center p-4">
            <img src={image} alt="tshirt" className="w-full h-auto rounded-lg shadow-lg" />
            <div className="text-red-500 text-2xl font-bold mt-4">😔</div>
            <p className="text-gray-600 mt-2">Sorry, the 3D model is not available on mobile.</p>
          </div>
        ) : (
          <div
            className="w-full h-[30vh] sm:h-[60vh] md:h-[80vh] lg:h-[100vh]"
            style={{ minHeight: "300px" }} // Ensures visibility on very small screens
          >
            <Canvas
              camera={{
                fov: 75,
                position: [0, 1.5, 8], // Adjusted position for better view
              }}
              gl={{
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.2,
                outputEncoding: THREE.sRGBEncoding,
              }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls
                enableZoom={false}
                enableDamping
                dampingFactor={0.1}
                autoRotate
                autoRotateSpeed={1.5}
              />
              <TShirtModel />
            </Canvas>
          </div>
        )}
      </div>

      {/* Text and Button Section */}
      <div className="flex-1 p-4 flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">I WANT IT!</h2>
        <button
          className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-all"
          onClick={() => alert("Redirecting to purchase page!")}
        >
          BUY NOW ➡
        </button>
      </div>
    </div>
  );
};

export default TShirtAdvert;
