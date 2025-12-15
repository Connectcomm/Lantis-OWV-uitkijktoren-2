useGLTF.preload("2025-12-12_Lantis-OWV_Uitkijktoren-2.glb");
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds, Center } from "@react-three/drei";
import "./App.css";

function Uitkijktoren() {
  const gltf = useGLTF("/2025-12-12_Lantis-OWV_Uitkijktoren-2.glb"); // werkt via public folder

  return (
    <Center>
      <primitive object={gltf.scene} scale={1} />
    </Center>
  );
}

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [3, 3, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, 5]} intensity={2} helper />
        <Bounds fit clip observe margin={1.2}>
          <Uitkijktoren />
        </Bounds>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
