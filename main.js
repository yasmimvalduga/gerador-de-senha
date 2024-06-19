const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

numeroSenha . textContent = tamanhoSenha;
gerador ( ) ;

for (i=0; i < caixa de seleção . comprimento ;i++) {
 caixa de seleção [ eu ]. onclick = geraSenha;
}

geraSenha () {
    function geraSenha(){
        let alfabeto = '';
        if (checkbox[0].checked){
            alfabeto = alfabeto + letrasMaiusculas;
        }
        if (checkbox[1].checked){
            alfabeto = alfabeto + letrasMinusculas;
        }
        if (checkbox[2].checked){
            alfabeto = alfabeto + numeros;
        }
        if (checkbox[3].checked){
            alfabeto = alfabeto + simbolos;
        }
        console.log(alfabeto);
        let senha = '';
        for (let i = 0; i < tamanhoSenha;i++){
            let numeroAleatorio = Math.random()*alfabeto.length;
            numeroAleatorio = Math.floor(numeroAleatorio);
            senha = senha + alfabeto[numeroAleatorio];
        }
        campoSenha.value = senha;
    classificaSenha(alfabeto.legth);
    }

    function classificaSenha(tamanhoAlfabeto){
        let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
        console.log(entropia);
        forcaSenha.classList.remove('fraca','media','forte');
        if (entropia > 57){
            forcaSenha.classList.add('forte');
        } else if (entropia > 35 && entropia < 57 ) {
            forcaSenha.classList.add('media');
        } else if (entropia <= 35){
            forcaSenha.classList.add('fraca');
        }
        const valorEntropia = document.querySelector('.entropia');
        valorEntropia.textContent = 2**Math.floor(entropia)/(100e6*60*60*24);
    }
    
       
    


}







