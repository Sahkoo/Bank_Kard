// Модалки //
let button = document.querySelector(".button")

button.addEventListener("click", function () {
    let name = document.querySelector(".name")
    let email = document.querySelector(".email")
    let password = document.querySelector(".password")
    let phone = document.querySelector(".phone")
    let chkbox = document.querySelector(".input-checkbox")

    let userName = name.value
    let userEmail = email.value
    let userPassword = password.value
    let userPhone = phone.value



    if (userName.length === 0) {
        let newFormBox = document.querySelector(".form-box1-modal")
        newFormBox.classList.add("active")

        setTimeout(function () {
            newFormBox.classList.remove("active")
        }, 3000);
    }
    else if (!userEmail.includes("@")) {
        let newFormBox2 = document.querySelector(".form-box2-modal")
        newFormBox2.classList.add("active")

        setTimeout(function () {
            newFormBox2.classList.remove("active")
        }, 3000);
    }
    else if (userPassword.length < 7) {
        let newFormBox3 = document.querySelector(".form-box3-modal")
        newFormBox3.classList.add("active")

        setTimeout(function () {
            newFormBox3.classList.remove("active")
        }, 3000);
    }
    else if (userPhone.length !== 13 || !userPhone.includes("+")) {
        let newFormBox4 = document.querySelector(".form-box4-modal")
        newFormBox4.classList.add("active")

        setTimeout(function () {
            newFormBox4.classList.remove("active")
        }, 3000);
    }
    else if (!chkbox.checked) {
        let newFormBox5 = document.querySelector(".form-box5-modal")
        newFormBox5.classList.add("active")

        setTimeout(function () {
            newFormBox5.classList.remove("active")
        }, 3000);
    } else {
        sessionStorage.setItem("userName", userName)
        window.location.href = "./nologin.html"
    }
});








