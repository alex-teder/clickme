function randomPercent() {
  return `${Math.floor(Math.random() * 75) + 5}%`;
}

function randomHex() {
  return Math.floor(128 + Math.random() * 128).toString(16);
}

async function pause(milliseconds: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), milliseconds);
  });
}

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
    this.style.top = randomPercent();
    this.style.left = randomPercent();
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
