/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite7/costumes/costume1.png", { x: 0, y: 0 })
    ];

    this.sounds = [
      new Sound("pop", "./Sprite7/sounds/pop.wav"),
      new Sound("dance slow mo", "./Sprite7/sounds/dance slow mo.wav")
    ];

    this.triggers = [];
  }
}
