// Theme toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
});

// Info modal
const infoLink = document.getElementById('info-link');
const modal = document.getElementById('info-modal');
const closeBtn = document.querySelector('.close');

infoLink.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
