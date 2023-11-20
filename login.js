let email = document.querySelector(".email")

email.addEventListener("input", function () {
    let emailValue = email.value;

    if (emailValue.length > 5 && emailValue.includes("@")) {
        email.classList.add("new");
        email.classList.remove("delate");
    } else if (emailValue.length === 0) {
        email.classList.remove("delate")
        email.classList.remove("new")
    } else {
        email.classList.remove("new")
        email.classList.add("delate")
    }
});

let email2 = document.querySelector(".email")

email2.addEventListener("input", function () {
    let email2Value = email2.value;

    if (email2Value.querySelector == "@") {
        email2.classList.add("new")
        email2.classList.remove("delate")
    }

});


let buttonWin = document.querySelector(".button")

buttonWin.addEventListener("click", (event) => {
    event.preventDefault()
    window.location.href = "index.html";
});