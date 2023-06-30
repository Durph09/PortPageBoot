import { Canvas } from "@react-three/fiber";
import { Stars,  } from "@react-three/drei";
import "./LandingFrame.css"

const StarsBg = () => {
  return (
    <div
      className="position-absolute d-flex w-100 vh-100 starsBG m-0"  //causing overflow
      style={{ zIndex: -10}}
    >
      <Canvas className="w-100 ">
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarsBg;