// Modal logic
const modal = document.getElementById("info-modal");
const btn = document.getElementById("info-link");
const span = document.querySelector(".close");

btn.onclick = function(e) {
  e.preventDefault();
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
