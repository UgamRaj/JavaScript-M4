const result = document.getElementById("result");
const btn = document.getElementById("btn");
const feedback = document.getElementsByClassName("feedback");
const okbtn = document.getElementById("okbtn");
const resultBox = document.getElementById("result-box");
const frontDisplay = document.getElementById("frontDisplay");

let resStr = "";
let resEmoji = "";

const removeAllClassList = () => {
  [...feedback].forEach((box) => {
    box.classList.remove("active");
  });
};

[...feedback].forEach((box) => {
  box.addEventListener("click", () => {
    removeAllClassList(); // remove active class from feedbook box
    resStr = box.children[1].innerHTML;
    resEmoji = box.children[0].innerHTML;
    box.classList.add("active");
  });
});

btn.addEventListener("click", () => {
  if (resEmoji) {
    frontDisplay.style.display = "none";
    result.innerHTML = `${resStr} ${resEmoji}`;
    resultBox.style.display = "flex";
  }
});

okbtn.addEventListener("click", () => {
  resultBox.style.display = "none";
  frontDisplay.style.display = "flex";
  removeAllClassList();
  resEmoji = "";
  resStr = "";
});
