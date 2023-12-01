let button = document.querySelector(".button-number")
let cardNumber = document.querySelector(".card_number")


button.addEventListener("click", function () {
    let newNumber = ""

    for (let i = 0; i < 16; i++) {
        let randomNumber = Math.floor(Math.random() * 10)
        newNumber += randomNumber
        if (i % 4 === 3 && i !== 15) {
            newNumber += ' ';
        }
    }
    cardNumber.textContent = newNumber
});


let buttonCv = document.querySelector(".button-cv")
let cardCv = document.querySelector(".card_cv")


buttonCv.addEventListener("click", function () {
    let newCv = ""

    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 10)
        newCv += randomNumber
        if (i % 4 === 3 && i !== 15) {
            newCv += ' ';
        }
    }
    cardCv.textContent = newCv
});

let cardData = document.querySelector(".card_year")
let newData = document.querySelector(".date")

newData.addEventListener("change", function () {
    let newCardData = newData.value
    let inputData = newCardData.split("-")

    if (inputData.length === 3) {
        let day = inputData[0]
        let month = inputData[1]
        let year = inputData[2]
        cardData.innerHTML = month + "/" + year
    }
});

let cardName = document.querySelector(".name_name")
let newName = document.querySelector(".input-name")

newName.addEventListener("input", function () {
    let newCardName = newName.value
    cardName.innerHTML = newCardName
});



let cardSurname = document.querySelector(".name_surname")
let newSurname = document.querySelector(".input-surname")

newSurname.addEventListener("input", function () {
    let newCardSurname = newSurname.value
    cardSurname.innerHTML = newCardSurname
});



let textAbout = document.querySelector(".text-about")
let chekModal = document.querySelector(".chek-modal")

textAbout.addEventListener("click", function () {
    if (chekModal.className === "chek-modal") {
        chekModal.classList.add("active")
    } else {
        chekModal.classList.remove("active")
    }
});



let newButton = document.querySelector(".xrest")

newButton.addEventListener("click", function () {
    if (chekModal.className === "chek-modal") {
        chekModal.classList.add("active")
    } else {
        chekModal.classList.remove("active")
    }
});



let skullBank = document.querySelector(".header-img")
let skullP = document.querySelector(".header-text")


skullBank.addEventListener("click", function () {
    if (skullP.className === "header-text") {
        skullP.classList.add("active")
    } else {
        skullP.classList.remove("active")
    }
});





let userName = sessionStorage.getItem("userName")
document.getElementById("header-name").innerText = userName