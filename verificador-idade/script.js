const data = new Date();

function verificar() {
    let anoAtual = data.getFullYear();
    let anoNasc = document.querySelector('.ano-nasc').value;
    let idade = anoAtual - Number(anoNasc);

    let deteccaoParagrafo = document.querySelector('.resultado p');
    let deteccaoImagem = document.querySelector('.resultado img');

    if ((idade < 0) || (anoNasc.length == 0)) {
        window.alert('informação inválida');
    } else {
        let src;
        let sexo = document.getElementsByName('sexo');
        if (sexo[0].checked) {
            deteccaoParagrafo.innerHTML = 'É um homem de ' + idade + ' anos.'; 
            if (idade < 13) {
                src = 'img/homem-crianca.jfif';  
            } else if (idade < 18) {
                src = 'img/homem-adolescente.jfif';
            } else if (idade < 60) {
                src = 'img/homem-adulto.jfif';
            } else {
                src = 'img/homem-idoso.jfif';
            }
        } else {
            deteccaoParagrafo.innerHTML = 'É uma mulher de ' + idade + ' anos.'; 
            if (idade < 13) {
                src = 'img/mulher-crianca.jfif';
            } else if (idade < 18) {
                src = 'img/mulher-adolescente.jfif';
            } else if (idade < 60) {
                src = 'img/mulher-adulta.jfif';
            } else {
                src = 'img/mulher-idosa.jfif';
            }
        }
        deteccaoImagem.setAttribute('src', src);
    }
}
