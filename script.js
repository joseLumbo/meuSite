//const menuBtn = document.querySelector("#menu");
//const closeMenuBtn = document.querySelector("#close-menu");
//const menu = document.querySelector("#mobile-navbar");
// const nome = document.querySelector("#nome");
// const email = document.querySelector("#email");
// const phone = document.querySelector("#tel");
// const message = document.querySelector("#message");
// const msg = document.querySelector("#msg-erro");
// const btn = document.querySelector("#btn");

// btn.addEventListener('click', (e) => {
//   e.preventDefault()

//   const name = nome.value;
//   const telefone = phone.value;
//   const messageValue = message.valeu;
//   const emailValue = email.value;

//   if(name === '' || telefone === '' || messageValue === '' || emailValue === ''){
//     msg.style.display = "block";
//     msg.textContent = "Preencha todos os campos";
//   }

// });



function validar() {

  // variavel de interação com o DOM
  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var tel = document.getElementById("tel");

  // expressões regulares que validam o e-mail o numero de celular
  var reg_email = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  var reg_tel = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');

  if (nome.value == "") {
    alert("Campo nome vazio, por favor preencher!!!")
    nome.focus()
  }
  if (email.value == "" || !reg_email.test(email.value)) {
    if (email.value == "") {
      alert("Campo email vazio, por favor preencher!!!")
      email.focus()
    } 
    if (!reg_email.test(email.value)) {
      alert("Email inválido!!!")
      email.focus()
    }
  }
  if (tel.value == "" || !reg_tel.test(tel.value)) {
    if (tel.value == "") {
      alert("Campo email vazio, por favor preencher!!!")
      tel.focus()
    } 
    if (!reg_tel.test(email.value)) {
      alert("Email inválido!!!")
      tel.focus()
    }
  }


}