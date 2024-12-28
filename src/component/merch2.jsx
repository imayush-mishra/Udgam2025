import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "./tshirt.glb"; // Ensure this file is in the `public` folder
const HDRI_URL =
  "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr";

const TShirtModel = () => {
  const { scene } = useGLTF(MODEL_URL);
  return <primitive object={scene} scale={6} />;
};

const TShirtAdvert = () => {
  return (
    <div className="flex flex-col md:flex-row items-center border-2 border-blue-500 rounded-lg shadow-lg mx-auto mt-8 max-w-6xl h-auto md:h-96">
      {/* 3D Model Section */}
      <div className="flex-1 flex justify-center items-center border-b-2 md:border-b-0 md:border-r-2 border-gray-300">
        <Canvas
          camera={{ fov: 75, position: [0, 0, 5] }}
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1,
            outputEncoding: THREE.sRGBEncoding,
          }}
          style={{ height: "350px", width: "100%" }}

          
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <OrbitControls
            enableZoom={false}
            enableDamping
            dampingFactor={0.05}
            autoRotate
            autoRotateSpeed={2}
          />
          <Environment files={HDRI_URL} background={false} />
          <TShirtModel />
        </Canvas>
      </div>

      {/* Text and Button Section */}
      <div className="flex-1 p-8 flex flex-col justify-center items-center text-center">
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
