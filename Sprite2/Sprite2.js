/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.png", {
        x: 2,
        y: 16
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLONE_START, this.startAsClone2)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.wait(1);
    this.goto(this.sprites["Sprite1"].x, this.sprites["Sprite1"].y);
    this.visible = false;
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.move(5);
      }
      if (this.keyPressed("left arrow")) {
        this.move(-5);
      }
      if (this.keyPressed("space")) {
        this.visible = true;
        for (let i = 0; i < 22.5; i++) {
          yield* this.wait(0.02);
          this.y += 15;
          yield;
        }
        this.visible = false;
        this.goto(this.sprites["Sprite1"].x, this.sprites["Sprite1"].y);
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(1);
    this.createClone();
    yield* this.wait(0.1);
    this.createClone();
    yield* this.wait(0.1);
    this.createClone();
    yield* this.wait(0.1);
    this.createClone();
  }

  *startAsClone() {
    this.goto(this.sprites["Sprite1"].x, this.sprites["Sprite1"].y);
    this.visible = false;
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.move(5);
      }
      if (this.keyPressed("left arrow")) {
        this.move(-5);
      }
      if (this.keyPressed("space")) {
        this.visible = true;
        for (let i = 0; i < 22.5; i++) {
          yield* this.wait(0.02);
          this.y += 15;
          yield;
        }
        this.visible = false;
        this.goto(this.sprites["Sprite1"].x, this.sprites["Sprite1"].y);
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {}

  *startAsClone2() {}
}
