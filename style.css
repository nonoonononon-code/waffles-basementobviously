document.addEventListener("DOMContentLoaded", () => {
  // Tab toggling for index.html
  const infoBtn = document.getElementById("infoBtn");
  const wafflesBtn = document.getElementById("wafflesBtn");
  const infoTab = document.getElementById("infoTab");
  const wafflesTab = document.getElementById("wafflesTab");
  const closeButtons = document.querySelectorAll(".closeTab");

  if (infoBtn && infoTab) {
    infoBtn.addEventListener("click", () => {
      infoTab.style.display = "block";
      if (wafflesTab) wafflesTab.style.display = "none";
    });
  }

  if (wafflesBtn && wafflesTab) {
    wafflesBtn.addEventListener("click", () => {
      wafflesTab.style.display = "block";
      if (infoTab) infoTab.style.display = "none";
    });
  }

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (infoTab) infoTab.style.display = "none";
      if (wafflesTab) wafflesTab.style.display = "none";
    });
  });

  // Dynamic bubbles & ice cubes for all pages
  const bubbleContainers = document.querySelectorAll(".tab-bubbles");
  bubbleContainers.forEach(container => {
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
