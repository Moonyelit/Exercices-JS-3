const greenButton = document.querySelector("#buttongreen");
const redButton = document.querySelector("#buttonred");
const blueButton = document.querySelector("#buttonblue");
const textDiv = document.querySelector("#text");

greenButton.addEventListener("click", handleClickChangeTextGreen);
function handleClickChangeTextGreen() {
    textDiv.classList.remove("textgreen", "textred", "textblue"); // Supprime les autres classes
    textDiv.classList.add("textgreen");
}

redButton.addEventListener("click", handleClickChangeTextRed);
function handleClickChangeTextRed() {
    textDiv.classList.remove("textgreen", "textred", "textblue"); // Supprime les autres classes
    textDiv.classList.add("textred");
}

blueButton.addEventListener("click", handleClickChangeTextBlue);
function handleClickChangeTextBlue() {
    textDiv.classList.remove("textgreen", "textred", "textblue"); // Supprime les autres classes
    textDiv.classList.add("textblue");
}

console.log(textDiv);

