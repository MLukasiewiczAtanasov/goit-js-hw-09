const buttonStart = document.querySelector("button[data-start]");
const buttonStop = document.querySelector("button[data-stop]");
buttonStop.setAttribute("disabled", "disabled")

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeBodyColor() {
    if (buttonStop.hasAttribute("disabled")) {
        return;
    }
    const body = document.querySelector("body");

    body.style.backgroundColor = getRandomHexColor();

    setTimeout(() => {
        changeBodyColor()
    }, 1000);
}

buttonStart.addEventListener("click", (event) => {
    buttonStart.setAttribute("disabled", "disabled")
    buttonStop.removeAttribute("disabled")

    changeBodyColor()
});

buttonStop.addEventListener("click", (event) => {
    buttonStart.removeAttribute("disabled")
    buttonStop.setAttribute("disabled", "disabled")
});