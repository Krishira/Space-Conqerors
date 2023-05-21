/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "image_2023-05-20_172450026",
        "./Sprite1/costumes/image_2023-05-20_172450026.png",
        { x: 21, y: 27 }
      ),
      new Costume(
        "image_2023-05-20_2",
        "./Sprite1/costumes/image_2023-05-20_2.png",
        { x: 24, y: 41 }
      )
    ];

    this.sounds = [new Sound("meow", "./Sprite1/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(Trigger.BROADCAST, { name: "3" }, this.whenIReceive3),
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, -159);
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.move(5);
      }
      if (this.keyPressed("left arrow")) {
        this.move(-5);
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.costume = "image_2023-05-20_172450026";
    while (true) {
      if (this.touching(this.sprites["Sprite8"].andClones())) {
        this.costume = "image_2023-05-20_2";
        yield* this.sayAndWait("Game Over", 2);
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.costume = "image_2023-05-20_172450026";
    while (true) {
      if (this.touching(this.sprites["Spaceship"].andClones())) {
        this.costume = "image_2023-05-20_2";
        yield* this.sayAndWait("Game Over", 2);
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.costume = "image_2023-05-20_172450026";
    while (true) {
      if (this.touching(this.sprites["Sprite3"].andClones())) {
        this.costume = "costume2";
        yield* this.sayAndWait("Game Over", 2);
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenIReceiveMessage1() {
    this.costume = "image_2023-05-20_2";
    /* TODO: Implement stop all */ null;
  }

  *whenIReceive3() {
    this.costume = "image_2023-05-20_2";
    yield* this.sayAndWait("Game Over", 2);
    /* TODO: Implement stop all */ null;
  }

  *whenIReceive2() {
    this.costume = "image_2023-05-20_172450026";
    while (true) {
      if (this.touching(this.sprites["Sprite3"].andClones())) {
        this.costume = "image_2023-05-20_2";
        yield* this.sayAndWait("Game Over", 2);
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }
}
