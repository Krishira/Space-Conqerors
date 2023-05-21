/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Adobe_20230520_190018",
        "./Sprite8/costumes/Adobe_20230520_190018.png",
        { x: 75, y: 84 }
      ),
      new Costume(
        "Adobe_20230520_2",
        "./Sprite8/costumes/Adobe_20230520_2.png",
        { x: 72, y: 81 }
      )
    ];

    this.sounds = [
      new Sound("pop", "./Sprite8/sounds/pop.wav"),
      new Sound("space ripple", "./Sprite8/sounds/space ripple.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(164, 128);
    this.visible = false;
  }

  *startAsClone() {
    this.costume = "Adobe_20230520_190018";
    while (true) {
      if (
        this.touching(this.sprites["Sprite6"].andClones()) ||
        this.touching(this.sprites["Sprite9"].andClones())
      ) {
        this.costume = "Adobe_20230520_2";
        this.deleteThisClone();
      }
      yield;
    }
  }

  *startAsClone2() {
    while (true) {
      this.visible = true;
      yield* this.glide(3, 173, -180);
      yield* this.glide(3, 164, 180);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.wait(12.5);
      this.createClone();
      yield;
    }
  }

  *startAsClone3() {
    yield* this.wait(60);
    this.broadcast("2");
  }
}
