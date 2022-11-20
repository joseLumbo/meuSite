//const menuBtn = document.querySelector("#menu");
//const closeMenuBtn = document.querySelector("#close-menu");
//const menu = document.querySelector("#mobile-navbar");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const phone = document.querySelector("#tel");
const message = document.querySelector("#message");
const msg = document.querySelector("#msg-erro");
const btn = document.querySelector("#btn");

btn.addEventListener('click', (e) => {
  e.preventDefault()

  const name = nome.value;
  const telefone = phone.value;
  const messageValue = message.valeu;
  const emailValue = email.value;

  if(name === '' || telefone === '' || messageValue === '' || emailValue === ''){
    msg.style.display = "block";
    msg.textContent = "Preencha todos os campos";
  }

});