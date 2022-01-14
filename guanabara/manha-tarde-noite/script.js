
const corManha = '#dab10e';
const corTarde = '#d2b48c';
const corNoite = '#10111e';

function atualizar() {
    const data = new Date(); 
    const hora = data.getHours();
    document.getElementById('horario').innerHTML = 'Agora é ' + hora + ' horas';

    let imagem = document.getElementById('img-turno');
    if (hora < 12) {
        imagem.src = 'img/manhã.jfif';
        document.body.style.backgroundColor = corManha;
    } else if (hora < 18) {
        imagem.src = 'img/tarde.jfif';
        document.body.style.backgroundColor = corTarde;
    } else {
        imagem.src = 'img/noite.jfif';
        document.body.style.backgroundColor = corNoite;
    }
}
