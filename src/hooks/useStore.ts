import { nanoid } from "nanoid";
import { create } from "zustand";

const getLocalStorage = (key: any) =>
  JSON.parse(window.localStorage.getItem(key) as any);

const setLocalStorage = (key: any, value: any) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: getLocalStorage("cubes") ? getLocalStorage("cubes") : [],
  addCube: (x: any, y: any, z: any) => {
    set((prev: any) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture,
        },
      ],
    }));
  },
  removeCube: (x: any, y: any, z: any) => {
    set((prev: any) => ({
      cubes: prev.cubes.filter((cube: any) => {
        const [X, Y, Z] = cube.pos;
        return X !== x || Y !== y || Z !== Z;
      }),
    }));
  },
  setTexture: (texture: any) => {
    set(() => ({
      texture,
    }));
  },
  saveWorld: () => {
    set((prev: any) => {
      setLocalStorage("cubes", prev.cubes);
      return { ...prev.cubes };
    });
  },
  resetWorld: () => {
    set(() => ({
      cubes: [],
    }));
  },
}));
