import { Canvas, useFrame, useThree } from "@react-three/fiber";
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
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";

const icons = [
  { icon: faReact },
  { icon: faGithub },
  { icon: faNodeJs },
  { icon: faBootstrap },
  { icon: faPython },
  { icon: faJs },
  { icon: faPhp },
];


const IconSphere = () => {
  const ref= useRef(null)
  const groupRef = useRef();
  const { docX, docY } = useMouse(ref);
  const [sphereRadius, setSphereRadius] = useState(20);

  useEffect(() => {
    groupRef.current.rotation.y = (docX / window.innerWidth) * Math.PI * 2;
    groupRef.current.rotation.x = (docY / window.innerHeight) * Math.PI * 2;
  }, [docX, docY]);

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
    <group ref={groupRef} position={[0, 0, -100]}>
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

const CustomOrbitControls = () => {
  const { camera } = useThree();

  // Set the initial camera position (zoom level)
  useEffect(() => {
    camera.position.set(0, 0, 300); // 5units away from the target along the Z-axis
  }, [camera]);

  return <OrbitControls camera={camera} autoRotate />;
};

const Tech = () => {
  return (
    <div className="bg-dark" style={{ width: "100%", height: "100%" }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <IconSphere />
        <Stars depth={50} radius={10} />
        <CustomOrbitControls />
      </Canvas>
    </div>
  );
};

export default Tech;
