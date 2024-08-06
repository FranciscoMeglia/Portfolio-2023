const whatsapp = document.getElementById("whatsapp")
const whatsappMessage = document.getElementById("whatsappMessage")
const sayHi = document.getElementById("hi")

// SAY HI ANIMATION
setTimeout(() => {
    sayHi.style.animation = "sayHi 1s infinite"
}, 2000)


setTimeout(() => {
    sayHi.style.animation = "none"
}, 3000)

// NAV RESP
const nav = document.getElementById("nav")
const navBtn = document.getElementById("navBtn")

navBtn.addEventListener("click", () => {
    if (nav.classList.contains("nav")) {
        nav.classList.remove("nav")
        nav.classList.add("navMobile")
        navBtn.classList.remove("fa-bars")
        navBtn.classList.add("fa-xmark")
        whatsapp.style.display = "none"
        whatsappMessage.style.display = "none"
        nav.style.animation = "none"
        document.body.style.overflowY = "hidden"
    } else {
        nav.classList.remove("navMobile")
        nav.classList.add("nav");
        navBtn.classList.remove("fa-xmark")
        navBtn.classList.add("fa-bars")
        whatsapp.style.display = "block"
        whatsappMessage.style.display = "block"
        document.body.style.overflowY = "auto"
    }
});

const links = document.querySelectorAll(".link")

links.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.style.overflowY = "scroll"
        nav.classList.remove("navMobile")
        nav.classList.add("nav")
        navBtn.classList.remove("fa-xmark");
        navBtn.classList.add("fa-bars");
    })
})

// AOS init
AOS.init()

