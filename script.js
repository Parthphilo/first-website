const slider = document.getElementById("brightness-slider");
const text = document.getElementById("parth-text");
const box = document.querySelector(".glow-box");

slider.addEventListener("input", () => {
  const value = slider.value;

  // Adjust text gradient shift and brightness
  text.style.backgroundPosition = `${value}%`;
  text.style.filter = `brightness(${50 + value / 2}%)`;

  // Adjust border glow intensity
  const intensity = value / 100;
  box.style.boxShadow = `
    0 0 ${10 + intensity * 30}px violet,
    0 0 ${20 + intensity * 40}px indigo,
    0 0 ${30 + intensity * 60}px blue,
    0 0 ${40 + intensity * 80}px green
  `;
});
