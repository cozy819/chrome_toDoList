const colors = ["#eebc12", "#8f4fae", "#2e8cd5"];

const body = document.querySelector("body");

body.innerHTML += "<h1>Hello!</h1>";

const h1 = document.querySelector("h1");
h1.style.color = "white";

body.style.backgroundColor = colors[0];

function handleSize() {
  console.log(window.innerWidth);
  if (window.innerWidth < 600) {
    body.style.backgroundColor = colors[2];
  } else if (600 <= window.innerWidth && window.innerWidth < 1200) {
    body.style.backgroundColor = colors[1];
  } else if (window.innerWidth >= 1800) {
    body.style.backgroundColor = colors[0];
  }
}

window.addEventListener("resize", handleSize);
