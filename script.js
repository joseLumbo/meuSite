
function validar() {

  // variavel de interação com o DOM
  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var tel = document.getElementById("tel");
  var cep = document.getElementById("cep")

  // expressões regulares que validam o e-mail o numero de celular
  var reg_email = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  var reg_tel = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');
  var reg_cep = new RegExp('^[0-9]{5}-[0-9]{3}$');

  if (nome.value == "") {
    alert("Campo nome vazio, por favor preencher!!!")
    nome.focus()
    return;
  }
  if (email.value == "" || !reg_email.test(email.value)) {
    if (email.value == "") {
      alert("Campo email vazio, por favor preencher!!!")
      email.focus()
      return;
    } 
    if (!reg_email.test(email.value)) {
      alert("Email inválido!!!")
      email.focus()
      return;
    }
  }
  if (tel.value == "" || !reg_tel.test(tel.value)) {
    if (tel.value == "") {
      alert("Campo telefone vazio, por favor preencher!!!")
      tel.focus()
      return;
    } 
    if (!reg_tel.test(tel.value)) {
      alert("Telefone inválido!!!")
      tel.focus()
      return;
    }
  }
  if (cep.value == "" || !reg_cep.test(cep.value)) {
    if (cep.value == "") {
      alert("Campo cep vazio, por favor preencher!!!")
      cep.focus()
      return;
    } 
    if (!reg_cep.test(cep.value)) {
      alert("CEP inválido!!!")
      tel.focus()
      return;
    }
  }

  alert("Formulário Enviado com Sucesso!!!")

}