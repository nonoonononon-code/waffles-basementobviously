document.querySelectorAll('.watery-tab').forEach(tab => {
  const minimizeBtn = tab.querySelector('.control-btn.minimize');
  const maximizeBtn = tab.querySelector('.control-btn.maximize');
  const closeBtn = tab.querySelector('.control-btn.close');
  const content = tab.querySelector('.tab-content');

  minimizeBtn.addEventListener('click', () => {
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });

  maximizeBtn.addEventListener('click', () => {
    if (tab.classList.contains('fullscreen')) {
      tab.classList.remove('fullscreen');
      tab.style.width = '80%';
      tab.style.height = 'auto';
    } else {
      tab.classList.add('fullscreen');
      tab.style.width = '100%';
      tab.style.height = '100vh';
    }
  });

  closeBtn.addEventListener('click', () => {
    tab.style.display = 'none';
  });
});
