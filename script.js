let toggle = document.getElementById("theme-switch__toggle");

toggle.addEventListener("change", function() {
  transition();
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});

const transition = () => {
  document.documentElement.classList.add("transition");
  setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 400);
}
