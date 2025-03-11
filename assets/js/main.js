const body = document.querySelector('body');

const main = document.createElement('main');
body.appendChild(main);

const h1 = document.createElement('h1');
main.appendChild(h1);
h1.textContent = `Cronômetro`;

const cronometro = document.createElement('div');
cronometro.classList.add('cronometro');
main.appendChild(cronometro);
cronometro.textContent = '00:00:00';

const buttons = document.createElement('div')
const buttonIniciar = document.createElement('button');
const buttonParar = document.createElement('button');
const buttonZerar = document.createElement('button');
buttons.classList.add('buttons');
main.appendChild(buttons);
buttons.appendChild(buttonIniciar);
buttons.appendChild(buttonParar);
buttons.appendChild(buttonZerar);
buttonIniciar.textContent = 'Iniciar';
buttonParar.textContent = 'Parar';
buttonZerar.textContent = 'Zerar';

let segundos = 0;
let timer;

const criaHoraDosSegundos = (segundos) => {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const iniciarcronometro = () => {
    timer = setInterval(function() {
        segundos++;
        cronometro.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

buttonIniciar.addEventListener('click', function(event) {
    clearInterval(timer)
    iniciarcronometro();
});

buttonParar.addEventListener('click', function(event) {
    clearInterval(timer);
});

buttonZerar.addEventListener('click', function(event) {
    clearInterval(timer);
    cronometro.innerHTML = '00:00:00';
    segundos = 0
});