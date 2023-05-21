/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite6/costumes/costume1.png", {
        x: 84,
        y: 78
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite6/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
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
      if (this.keyPressed("up arrow")) {
        this.visible = true;
        for (let i = 0; i < 22.5; i++) {
          yield* this.wait(0.04);
          this.y += 15;
          yield;
        }
        this.visible = false;
        yield* this.wait(5);
        this.goto(this.sprites["Sprite1"].x, this.sprites["Sprite1"].y);
      }
      yield;
    }
  }
}
