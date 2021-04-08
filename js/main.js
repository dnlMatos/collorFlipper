let cont = 0;

function funcaoContador() {
    let valor = document.querySelector('.contador');
    let btnDec = document.querySelector('.decrementar');
    let btnRes = document.querySelector('.resetar');
    let btnInc = document.querySelector('.incrementar');
    let click = event.target;
    if (click == btnDec) {
        cont -= 1;
    } else if (click == btnRes) {
        cont = 0;
    } else if (click == btnInc) {
        cont += 1;
    }
    valor.textContent = cont;
}
