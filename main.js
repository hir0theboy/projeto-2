const form  = document.getElementById('form-agenda')

const Nome = []
const Numero = []


let linhas = '' //variaveis e constantes

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})     //chama a funcao adicionaLinha

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome')
    const inputNumeroContato = document.getElementById('numero')

    if(Nome.includes(inputNomeContato.value)) {
        alert(`O Contato: ${inputNomeContato.value} já foi inserido`)
    } else {

    Nome.push(inputNomeContato.value) //adicionar o nome
    Numero.push(parseInt(inputNumeroContato.value)) //adicionar a nota

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputNumeroContato.value}</td>`
    linha += '</tr>'

    linhas += linha}

    inputNomeContato.value = ''
    inputNumeroContato.value = ''
} //funcao para adicionar linhas

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
} //atualizar a tabela 

function PrimeiraLetraMaiuscula(elemento) {
    let valor = elemento.value;
    let palavras = valor.split(" ");
    
    for (let i = 0; i < palavras.length; i++) {
    palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1);
    }
    
    elemento.value = palavras.join(" ");
    } //toda primeira letra do nome será maiuscula 


