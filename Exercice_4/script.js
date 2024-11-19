const passwordInput = document.querySelector('#password');
const passwordInputConfirm = document.querySelector('#confirmPassword');
const buttonVerif = document.querySelector('#buttonVerification');

buttonVerif.addEventListener("click", handleClickVerif);

function handleClickVerif() {
    passwordInput.classList.remove("correct", "wrong");
    passwordInputConfirm.classList.remove("correct", "wrong");

    if (passwordInput.value === passwordInputConfirm.value) {
        passwordInput.classList.add("correct");
        passwordInputConfirm.classList.add("correct");
    } else {
        passwordInput.classList.add("wrong");
        passwordInputConfirm.classList.add("wrong");
    }
}
