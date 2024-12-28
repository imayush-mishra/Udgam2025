// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
// import * as THREE from "three";

// const MODEL_URL = "./tshirt.glb"; // Ensure this file is in the `public` folder
// const HDRI_URL =
//   "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr";

// const TShirtModel = () => {
//   const { scene } = useGLTF(MODEL_URL);
//   return <primitive object={scene} scale={5.5} />;
// };

// const TShirtAdvert = ({ width = "100%", height = "500px" }) => {
//   const containerStyle = {
//     width,
//     height,
//     border: "1px solid #ccc",
//   };

//   return (
//     <div style={containerStyle}>
//       <Canvas
//         camera={{ fov: 75, position: [0, 0, 5] }}
//         gl={{
//           antialias: true,
//           toneMapping: THREE.ACESFilmicToneMapping,
//           toneMappingExposure: 1,
//           outputEncoding: THREE.sRGBEncoding,
//         }}
//       >
//         {/* Lighting */}
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} />

//         {/* Orbit Controls with Auto-Rotate */}
//         <OrbitControls
//           enableDamping
//           dampingFactor={0.05}
//           autoRotate
//           autoRotateSpeed={2} // Adjust rotation speed
//         />

//         {/* Environment Map */}
//         <Environment files={HDRI_URL} background={false} />

//         {/* T-Shirt Model */}
//         <TShirtModel />
//       </Canvas>
//     </div>
//   );
// };

// export default TShirtAdvert;
