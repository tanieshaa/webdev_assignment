document.getElementById("colorbtn").addEventListener("click", function () {
  let color1 = randomcolorgen();
  let color2 = randomcolorgen();
  let gradient = `linear-gradient(to bottom, ${color1}, ${color2})`;
  document.body.style.background = gradient;
  document.getElementById("colorcode").innerText = `${color1}, ${color2}`;
});

function randomcolorgen() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }

  return color;
}
