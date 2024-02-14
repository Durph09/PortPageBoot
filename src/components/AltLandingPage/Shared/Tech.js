import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import * as THREE from 'three';
import { Vector } from "three";
import { useMouse } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReact,
  faNodeJs,
  faBootstrap,
  faPython,
  faJs,
  faPhp,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";
import "./Tech.css";
import "../../../App.css";

const icons = [
  { icon: faReact },
  { icon: faGithub },
  { icon: faNodeJs },
  { icon: faBootstrap },
  { icon: faPython },
  { icon: faJs },
  { icon: faPhp },
  { icon: faFigma },
];

const IconSphere = () => {
  const ref = useRef(null);
  const groupRef = useRef();
  const { docX, docY } = useMouse(ref);
  const [sphereRadius, setSphereRadius] = useState(10);

  useEffect(() => {
    groupRef.current.rotation.y = (docX / window.innerWidth) * Math.PI * 2;
    groupRef.current.rotation.x = (docY / window.innerHeight) * Math.PI * 2;
  }, []);

  useFrame(({ clock }) => {
    const scrollSpeed = 0.1;
    const newRadius = sphereRadius + scrollSpeed;
    setSphereRadius(newRadius);
  });

  const iconRadius = 3;

  const calculateIconPosition = (index, total) => {
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;

    const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
    const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
    const z = sphereRadius * Math.cos(phi);

    return { x, y, z };
  };

  return (
    <group ref={groupRef} position={[0, 0, -10]}>
      {icons.map((item, index) => {
        const { x, y, z } = calculateIconPosition(index, icons.length);
        return (
          <Html key={index} position={[x, y, z]} center>
            <FontAwesomeIcon icon={item.icon} size="5x" className="iconColor" />
          </Html>
        );
      })}
    </group>
  );
};

const CustomOrbitControls = () => {
  const { camera } = useThree();
  let start = Date.now();
  const duration = 10000; //seconds in milliseconds
  const startPosition = new THREE.Vector3(0, 0, 0);
  const endPosition = new THREE.Vector3(0, 0, 300);

  useEffect(() => {
    camera.position.copy(startPosition);
  }, []);

  useFrame(() => {
    const elapsed = Date.now() - start;
    if (elapsed < duration) {
      const alpha = elapsed / duration; // Alpha goes from 0 to 1 over 'duration' ms

      // Linearly interpolate between the start and end positions
      camera.position.lerpVectors(startPosition, endPosition, alpha);
    }
  });

  return <OrbitControls camera={camera} autoRotate />;
};
const Tech = () => {
  return (
    <div
      className="vh-100 vw-100 d-flex justify-content-between "
      style={{ backgroundColor: "black" }}
    >
      <div className="vh-100 vw-100 d-flex position-fixed ">
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          <IconSphere />
          <Stars depth={50} radius={10} />

          <CustomOrbitControls />
        </Canvas>
      </div>

      <div className="overlayColStart text-warning py-4">
        <div className="px-5 py-5">
          <h1 className="fw-bolder">Hi,</h1> <h1>I'm Conor</h1>
          <h1>a web dev</h1>
          <p className="fw-lighter">Front End Developer / React enthusiest</p>
        </div>
      </div>
      <div className="overlayColEnd"></div>
    </div>
  );
};

export default Tech;
