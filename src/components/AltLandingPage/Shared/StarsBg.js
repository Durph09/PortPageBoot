import { Canvas } from "@react-three/fiber";
import { Stars,  } from "@react-three/drei";
import "./LandingFrame.css"

const StarsBg = () => {
  return (
    <div
      className="position-absolute d-flex w-100 h-100 bg-dark m-0 stars"  //causing overflow
      style={{ zIndex: -1, overflow: "hidden" }}
    >
      <Canvas className="w-100">
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarsBg;