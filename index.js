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

// FORM CONTENT MANAGEMENT
const submit = document.getElementById("submit")
const names = document.getElementById("Name")
const email = document.getElementById("Email")
const message = document.getElementById("Message")

submit.addEventListener("click" , () => {

    if (names.value.length > 0 && email.value.includes("@") && message.value.length > 0 ) {
        submit.innerText = "SENDING.."
    }

})

// CHANGE BUTTON TEXT STATUS
document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target
  
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        "Accept": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        submit.textContent = "¡Thank You ✔️!";
         setTimeout(() => {
             submit.textContent = "SUBMIT"
         }, 3000)
        form.reset();
      } else {
        return response.json().then(errorData => {
          throw new Error(errorData.message || "Error en el envío");
        });
      }
    }).catch(error => {
      submit.textContent = "Try again please";
       setTimeout(() => {
         submit.textContent = "SUBMIT"
     }, 3000)
    });
});
  