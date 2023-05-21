/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spaceship extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "0902f156e0281d9",
        "./Spaceship/costumes/0902f156e0281d9.png",
        { x: 6, y: 17 }
      ),
      new Costume(
        "Adobe_20230520_182312",
        "./Spaceship/costumes/Adobe_20230520_182312.png",
        { x: 30, y: 28 }
      )
    ];

    this.sounds = [
      new Sound("pop", "./Spaceship/sounds/pop.wav"),
      new Sound("alien creak2", "./Spaceship/sounds/alien creak2.wav"),
      new Sound("scream-female", "./Spaceship/sounds/scream-female.wav"),
      new Sound("space ripple", "./Spaceship/sounds/space ripple.wav"),
      new Sound("computer beeps1", "./Spaceship/sounds/computer beeps1.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.wait(this.random(3, 10));
      this.visible = true;
      this.createClone();
      this.visible = false;
      yield;
    }
  }

  *startAsClone() {
    this.visible = true;
    this.y = 118;
    this.x = this.random(-230, 230);
    for (let i = 0; i < 60; i++) {
      yield* this.wait(0.01);
      this.y -= 5;
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    this.costume = "0902f156e0281d9";
    while (true) {
      if (
        this.touching(this.sprites["Sprite9"].andClones()) ||
        this.touching(this.sprites["Sprite6"].andClones()) ||
          this.touching(this.sprites["Sprite2"].andClones())
      ) {
        this.costume = "Adobe_20230520_182312";
        this.deleteThisClone();
      }
      yield;
    }
  }
}
