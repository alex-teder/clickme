import { randomPositionPercent, randomHex, pause } from "./utils";

class MyButton extends HTMLButtonElement {
  constructor() {
    super();
    this.classList.add("my-button");
    this.move();
  }

  private randomizeColor() {
    const color = `#${randomHex()}${randomHex()}${randomHex()}`;
    this.style.backgroundColor = color;
  }

  private disappear() {
    this.style.display = "none";
  }

  private reappear() {
    this.style.display = "block";
  }

  async move() {
    this.disappear();
    this.randomizeColor();
    this.style.top = randomPositionPercent();
    this.style.left = randomPositionPercent();
    await pause(200);
    this.reappear();
  }

  async maybeMove() {
    if (Math.random() > 0.5) {
      await this.move();
    }
  }
}

export default MyButton;
