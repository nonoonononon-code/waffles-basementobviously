// Example: Add interactivity or animations
document.addEventListener("DOMContentLoaded", () => {
  console.log("Waffle's Basement site loaded!");

  // Optional: Add hover sound or bubble effect
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });
});
