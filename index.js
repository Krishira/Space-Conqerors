import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Spaceship from "./Spaceship/Spaceship.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite9 from "./Sprite9/Sprite9.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Sprite1: new Sprite1({
    x: 0,
    y: -159,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: -159,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Sprite3: new Sprite3({
    x: -116,
    y: 100,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Spaceship: new Spaceship({
    x: -211,
    y: 3.5,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Sprite4: new Sprite4({
    x: 0,
    y: 0,
    direction: 173.3464593980545,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Sprite5: new Sprite5({
    x: 0,
    y: 0,
    direction: 111.59531044896768,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Sprite6: new Sprite6({
    x: 0,
    y: -159,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Sprite7: new Sprite7({
    x: -49,
    y: 15,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  Sprite8: new Sprite8({
    x: 164,
    y: 128,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Sprite9: new Sprite9({
    x: 0,
    y: -1,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
