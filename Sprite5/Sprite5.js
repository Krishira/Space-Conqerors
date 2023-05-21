/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.png", {
        x: 29,
        y: 31
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind(1000);
    this.visible = false;
    this.goto(0, 0);
    while (true) {
      yield* this.wait(2);
      this.createClone();
      yield;
    }
  }

  *startAsClone() {
    this.visible = true;
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Sprite1"].y - this.y,
        this.sprites["Sprite1"].x - this.x
      )
    );
    this.direction += 15;
    for (let i = 0; i < 260; i++) {
      this.move(1.25);
      yield;
    }
  }

  *startAsClone2() {
    while (true) {
      if (this.touching("edge")) {
        this.deleteThisClone();
      }
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.broadcast("message1");
      }
      if (
        this.touching(this.sprites["Sprite2"].andClones()) ||
        this.touching(this.sprites["Sprite6"].andClones()) ||
          this.touching(this.sprites["Sprite9"].andClones())
      ) {
        this.deleteThisClone();
      }
      yield;
    }
  }
}
