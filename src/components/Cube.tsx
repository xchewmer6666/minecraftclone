import { useState } from "react";
import { useBox } from "@react-three/cannon";
import { useStore } from "../hooks/useStore";

import * as tz from "../images/textures";

const Cube = ({ position, texture }: any) => {
  const textures = tz as any;
  const [isHovered, setIsHovered] = useState(false);
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));
  const [addCube, removeCube] = useStore((state: any) => [
    state.addCube,
    state.removeCube,
  ]);

  const activeTexture = textures[texture + "Texture"];

  return (
    <mesh
      onPointerMove={(e: any) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e: any) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      ref={ref as any}
      onClick={(e: any) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current?.position as any;
        if (e.altKey) {
          removeCube(x, y, z);
          return;
        }
        if (clickedFace === 0) {
          addCube(x + 1, y, z);
          return;
        } else if (clickedFace === 1) {
          addCube(x - 1, y, z);
          return;
        } else if (clickedFace === 2) {
          addCube(x, y + 1, z);
          return;
        } else if (clickedFace === 3) {
          addCube(x, y - 1, z);
          return;
        } else if (clickedFace === 4) {
          addCube(x, y, z + 1);
          return;
        } else if (clickedFace === 5) {
          addCube(x - 1, y, z - 1);
          return;
        }
      }}
    >
      <boxGeometry attach="geometry" />
      <meshStandardMaterial
        color={isHovered ? "gray" : "white"}
        map={activeTexture}
        transparent={true}
        opacity={texture === "glass" ? 0.5 : 1}
        attach="material"
      />
    </mesh>
  );
};

export default Cube;
