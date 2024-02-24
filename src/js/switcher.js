const switcherToggle = document.querySelector(".switcher-toggle");

switcherToggle.addEventListener("change", changeTheme);

function changeTheme(event) {
    if (event.target.checked) {
        document.body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
    }
}

const ourTheme = localStorage.getItem("theme");
if (ourTheme === "dark") {
    switcherToggle.checked = true;
    document.body.classList.replace("light", "dark");
}