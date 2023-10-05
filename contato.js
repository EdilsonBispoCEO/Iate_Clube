const formulario = document.getElementById('meuFormulario') //não pode ser alterada
// var formulario = document.getElementById('meuFormulario') //pode ser alterada
// let formulario = document.getElementById('meuFormulario') //é temporario


// Event click -> click esquerdo do Mouse
// Event contextmenu -> click direito do Mouse
formulario.addEventListener('submit', function (event) {
    event.preventDefault() //desligando o evento padrão do formulario

    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var assunto = document.getElementById('assunto').value
    var menssagem = document.getElementById('mensagem').value

    // estrutura d um URL
    // http://127.0.0.1:5500/contato.html?nome=&email=&assunto=&mensagem=#
    // https: -> protocolo de rede 's' seguro
    // www.sp.senac.br -> endereço do site (https://127.0.0.1:5500/)
    // area-exclusiva/home -> caminho do site (arquivos de codigos)
    // ? -> separador, para dizer dizer que nossa url contem paramentros
    // usuario -> o nome da variavel ou o ID de identificação
    // =edilson -> ao valor da nossa variavel

    window.location.href = 'envio.html' + 
        '?nome'

    console.log(nome)
    alert(nome)
})