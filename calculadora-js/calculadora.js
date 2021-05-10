//função para inserir números no visorao clicar

function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

//função para limpar tela

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

//função do botão apagar 

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

//funçãodos calculos

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    var historico = [];
    var adicionar = historico.push(resultado + ' = ' + eval(resultado) + '<br>');
    document.getElementById('resultado').innerHTML = eval(resultado);
    console.log(historico);
    document.querySelector('.historicoC').innerHTML += historico;
    
    
}

function reset(){
    document.querySelector('.historicoC').innerHTML = "";
}



