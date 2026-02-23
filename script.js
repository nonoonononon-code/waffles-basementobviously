// Grab buttons and tabs
const infoBtn = document.getElementById("infoBtn");
const wafflesBtn = document.getElementById("wafflesBtn");
const infoTab = document.getElementById("infoTab");
const wafflesTab = document.getElementById("wafflesTab");

// Hide all tabs
function hideTabs() {
  infoTab.style.display = "none";
  wafflesTab.style.display = "none";
}

// Show Info tab
infoBtn.addEventListener("click", () => {
  hideTabs();
  infoTab.style.display = "block";
});

// Show Waffles+ tab
wafflesBtn.addEventListener("click", () => {
  hideTabs();
  wafflesTab.style.display = "block";
});
