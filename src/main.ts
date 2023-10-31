import "./style.css";
import MyButton from "./MyButton";

customElements.define("my-button", MyButton, { extends: "button" });

const button = new MyButton();
document.querySelector("#app")?.appendChild(button);

let count = 0;
button.innerText = `Count: ${count}`;

button.addEventListener("click", async () => {
  await button.move();
  button.innerText = `Count: ${++count}`;
});

button.addEventListener("mouseover", async () => {
  await button.maybeMove();
});
