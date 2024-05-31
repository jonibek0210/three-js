"use client"
import Experience from "@/components/Experience";
import { Canvas } from "@react-three/fiber";

const Home = () => {
   return (
      <Canvas
         className="h-screen w-screen"
         camera={{
            fov: 65,
            position: [2.3, 1.5, 2.3],
         }}
      >
         <Experience />
      </Canvas>
   );
}

export default Home
