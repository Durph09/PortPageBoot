import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";

import { useMouse } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReact,
  faNodeJs,
  faBootstrap,
  faPython,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";



const icons = [
  { icon: faReact},
  { icon: faGithub },
  { icon: faNodeJs },
  { icon: faBootstrap },
  { icon: faPython },
  { icon: faJs },
];


const IconSphere = () => {
  const groupRef = useRef();
  const { docX, docY } = useMouse(document);

  useEffect(() => {
    groupRef.current.rotation.y = (docX / window.innerWidth) * Math.PI * 2;
    groupRef.current.rotation.x = (docY / window.innerHeight) * Math.PI * 2;
  }, [docX, docY]);

  const iconRadius = 3;
  const sphereRadius = 10;

  const calculateIconPosition = (index, total) => {
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;

    const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
    const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
    const z = sphereRadius * Math.cos(phi);

    return { x, y, z };
  };

  return (
    <group ref={groupRef}>
      {icons.map((item, index) => {
        const { x, y, z } = calculateIconPosition(index, icons.length);
        return (
          <Html key={index} position={[x, y, z]} center>
            <FontAwesomeIcon
              icon={item.icon}
              size="5x"
              style={{ color: "white" }}
            />
          </Html>
        );
      })}
    </group>
  );
};

const Tech = () => {
  return (
    <div    className="bg-dark" style={{ width: "100%", height: "100%" }} >
    
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <IconSphere />
        <Stars />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Tech;
