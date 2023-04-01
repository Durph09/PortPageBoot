import { Canvas } from "@react-three/fiber";
import { Stars,  } from "@react-three/drei";


const StarsBg = () => {
  return (
    <div
      className="position-absolute w-100 h-100 bg-dark m-0"  //causing overflow
      style={{ zIndex: -1 }}
    >
      <Canvas>
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarsBg;