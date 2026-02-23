document.addEventListener("DOMContentLoaded", () => {
  console.log("Site loaded with watery effects!");

  // Make bubbles interactive: pop when clicked
  const bubbles = document.querySelectorAll(".tab-bubbles::before, .tab-bubbles::after");
  // Note: pseudo-elements can't be selected directly, so instead we can generate bubbles dynamically:
  const bubbleContainer = document.querySelectorAll(".tab-bubbles");
  bubbleContainer.forEach(container => {
    for (let i = 0; i < 6; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      bubble.style.left = `${Math.random() * 90}%`;
      bubble.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(bubble);

      bubble.addEventListener("click", () => {
        bubble.style.transition = "transform 0.3s, opacity 0.3s";
        bubble.style.transform = "scale(0)";
        bubble.style.opacity = "0";
        setTimeout(() => bubble.remove(), 300);
      });
    }
  });

  // Make ice cubes interactive: drift when hovered
  const iceContainers = document.querySelectorAll(".tab-ice");
  iceContainers.forEach(container => {
    for (let i = 0; i < 4; i++) {
      const ice = document.createElement("div");
      ice.classList.add("ice");
      ice.style.left = `${Math.random() * 80}%`;
      ice.style.animationDelay = `${Math.random() * 6}s`;
      container.appendChild(ice);

      ice.addEventListener("mouseenter", () => {
        ice.style.transform = "translateY(-20px) rotate(45deg)";
      });
      ice.addEventListener("mouseleave", () => {
        ice.style.transform = "";
      });
    }
  });
});
