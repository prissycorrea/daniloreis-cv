function enviarForm() {
    var nome = document.querySelector(".input__nome");
    var email = document.querySelector(".input__email");
    var tel = document.querySelector(".input__tel");
    var msg = document.querySelector(".input__msg");

    if (nome.value != "" && email.value != "" && tel.value != "" && msg.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    } else {
        alert('Por favor, preencha todos os dados.')
    }
}