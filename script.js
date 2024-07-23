const h2 = document.querySelector("h2")

h2.style.color = "white"
h2.style.fontSize = "32px"

const btn = document.querySelector("button")

btn.style.borderColor = "green"
btn.style.fontSize = "13px"
btn.style.borderRadius = "20px"

// Primeira interação usuário

const userIpt = document.querySelector('input')
userIpt.classList.add("error")

const paragrafo = document.querySelector("p")
paragrafo.classList.add("visible")


// Segunda interação usuário

userIpt.classList.remove("error")
userIpt.classList.add("correct")
paragrafo.classList.remove("visible")

const userPsp = document.querySelector('input[type="password"]')
userPsp.classList.add("error")

// usado all para pegar todos os elementos de mesma class

const paragrafo2 = document.querySelectorAll("p")
paragrafo2[1].classList.add("visible")
