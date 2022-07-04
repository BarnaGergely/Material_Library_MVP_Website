const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.documentElement.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.documentElement.classList.toggle("light-theme");
}

document.querySelector(".btn-theme-toggle").addEventListener("click", function () {
    console.log("klikk");
  if (prefersDarkScheme.matches) {
    console.log("1. if");
    document.documentElement.classList.toggle("light-theme");
    document.documentElement.classList.toggle("dark-theme");
    var theme = document.documentElement.classList.contains("light-theme")
      ? "light"
      : "dark";
      console.log("Theme: " + theme);
  } else {
    console.log("else");
    document.documentElement.classList.toggle("dark-theme");
    document.documentElement.classList.toggle("light-theme");
    var theme = document.documentElement.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }

  localStorage.setItem("theme", theme);
  window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({matches:isDark}) => {
    theme.value = isDark ? 'dark' : 'light'
    setPreference()
  })
  console.log(localStorage.getItem("theme"));
});