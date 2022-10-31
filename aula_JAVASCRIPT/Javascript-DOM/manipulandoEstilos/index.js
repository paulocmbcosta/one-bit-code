function useLightTheme() {
  document.body.style.color = "#212529";
  document.body.style.backgroundColor = "#F1F5F9";
}

function useDarkTheme() {
  document.body.style.color = "#F1F5F9";
  document.body.style.backgroundColor = "#212529";
}

function switchTheme() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

document.getElementById("lightBtn").addEventListener("click", useLightTheme);
document.getElementById("darkBtn").addEventListener("click", useDarkTheme);
document.getElementById("switchBtn").addEventListener("click", switchTheme);
