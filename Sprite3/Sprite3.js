/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("spaceship1_1", "./Sprite3/costumes/spaceship1_1.png", {
        x: 26,
        y: 21
      }),
      new Costume("spaceship1_2", "./Sprite3/costumes/spaceship1_2.png", {
        x: 33,
        y: 44
      })
    ];

    this.sounds = [
      new Sound("pop", "./Sprite3/sounds/pop.wav"),
      new Sound("alien creak2", "./Sprite3/sounds/alien creak2.wav"),
      new Sound("scream-female", "./Sprite3/sounds/scream-female.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "spaceship1_1";
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.wait(3);
      this.visible = true;
      this.createClone();
      this.visible = false;
      yield;
    }
  }

  *startAsClone() {
    this.goto(0, 150);
    while (true) {
      while (!this.touching("edge")) {
        this.x += this.random(-1, 6);
        yield;
      }
      this.x -= 10;
      this.y -= 50;
      while (!this.touching("edge")) {
        this.x += this.random(-6, 1);
        yield;
      }
      this.x += 10;
      this.y -= 50;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    yield* this.wait(61.5);
    while (true) {
      yield* this.wait(3);
      this.visible = true;
      this.createClone();
      this.visible = false;
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    yield* this.wait(122.3);
    while (true) {
      yield* this.wait(3);
      this.visible = true;
      this.createClone();
      this.visible = false;
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    yield* this.wait(187.7);
    while (true) {
      yield* this.wait(1);
      this.visible = true;
      this.createClone();
      this.visible = false;
      yield;
    }
  }

  *startAsClone2() {
    this.costume = "spaceship1_1";
    while (true) {
      if (
        this.touching(this.sprites["Sprite9"].andClones()) ||
        this.touching(this.sprites["Sprite6"].andClones()) ||
          this.touching(this.sprites["Sprite2"].andClones())
      ) {
        this.costume = "spaceship1_2";
        yield* this.wait(1);
        this.deleteThisClone();
      }
      yield;
    }
  }

  *startAsClone3() {
    while (true) {
      if (this.compare(this.y, -170) < 0) {
        yield* this.broadcastAndWait("3");
      }
      yield;
    }
  }
}
