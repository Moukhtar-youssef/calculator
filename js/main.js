"use strict";
let input = document.querySelector("#input");
let output = document.querySelector("#output");
let buttons = Array.from(document.querySelectorAll("button"));
buttons.map((buttons) => {
  buttons.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        input.innerText = "";
        output.innerText = "";
        break;
      case "Del":
        if (input.innerText) {
          input.innerText = input.innerText.slice(0, -1);
          output.innerText = "";
        }
        break;
      case "=":
        try {
          output.innerText = eval(input.innerText);
        } catch (_a) {
          output.innerText = "Error!";
        }
        break;
      default:
        if (input.innerText.length <= 12) {
          input.innerText += e.target.innerText;
        }
    }
  });
});
