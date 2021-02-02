const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


//VALIDAÇÕES DE CAMPO


//VALIDAÇÃO DE CAMPOS NO SIGN IN
function validarIN() {
  // pegando o valor do nome pelos names
  var Username = document.getElementById("Username");
  var Password = document.getElementById("Password");

  // verificar se o nome está vazio
  if (Username.value == "") {
    alert("Nome não informado");

    // Deixa o input com o focus
    formularioIN.Username.focus();
    // retorna a função e não olha as outras linhas
    return false;

  }

  if (Password.value == "") {
    alert("Senha não informado");

    // Deixa o input com o focus
    formularioIN.Password.focus();
    // retorna a função e não olha as outras linhas
    return false;

  }
}


//VALIDAÇÃO DE CAMPOS NO SIGN UP
function validarUP() {
  // pegando o valor do nome pelos names
  var UsernameUP = document.getElementById("UsernameUP");
  var PasswordUP = document.getElementById("PasswordUP");
  var Email = document.getElementById("Email");
  var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){2})/;

  // verificar se o nome está vazio
  if (UsernameUP.value == "") {
    alert("Nome não informado");

    // Deixa o input com o focus
    formularioUP.UsernameUP.focus();
    // retorna a função e não olha as outras linhas
    return false;

  }


  if (PasswordUP.value == "") {
    alert("Senha não informado");

    // Deixa o input com o focus
    formularioUP.PasswordUP.focus();
    // retorna a função e não olha as outras linhas
    return false;
  }

  if(Email.value == ""){
      alert("Email não foi informado");
      formularioUP.Email.focus();
      return false;
  }

  return true;
    
}

// (?=(?:.*?[A-Z]){3}) - Mínimo 3 letras maiúsculas
// (?=(?:.*?[0-9]){2}) - Mínimo 2 números
// (?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#;$%*(){}_+^&] - Mínimo 1 caractere especial