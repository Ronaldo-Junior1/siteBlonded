function exibirResultado(formulario){
    let data = formulario.show.value;
    let nome = formulario.nome.value;
    let email = formulario.email.value;
    let cantor = formulario.cantor.value;
    let mensagem = formulario.mensagem.value;

    if(data == '' || nome == '' || email == '' || mensagem == '' || cantor == '' )
        document.getElementById("resultado").style.display = "none";
    else{
        document.getElementById("nomeEnviado").textContent = `Nome: ${nome}`;
        document.getElementById("emailEnviado").textContent = `Email: ${email}`;
        document.getElementById("dataEnviada").textContent = `Data: ${data}`;
        document.getElementById("mensagemEnviada").textContent = `Mensagem: ${mensagem}`;
        document.getElementById("cantorEnviado").textContent = `Cantor: ${cantor}`;
        document.getElementById("resultado").style.display = "block";
    }

}

    

function limparResultado(){
    document.getElementById("resultado").style.display = "none";
}