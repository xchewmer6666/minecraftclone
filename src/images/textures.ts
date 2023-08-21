import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

import { dirtImg, logImg, grassImg, glassImg, woodImg } from "./images";

const dirtTexture = new TextureLoader().load(dirtImg as any);
const logTexture = new TextureLoader().load(logImg as any);
const grassTexture = new TextureLoader().load(grassImg as any);
const glassTexture = new TextureLoader().load(glassImg as any);
const woodTexture = new TextureLoader().load(woodImg as any);
const groundTexture = new TextureLoader().load(grassImg as any);

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;

export {
  dirtTexture,
  logTexture,
  grassTexture,
  glassTexture,
  woodTexture,
  groundTexture,
};
