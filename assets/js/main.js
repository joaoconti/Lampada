function init() {
    const turnOn = document.getElementById('turnOn');
    const turnOff = document.getElementById('turnOff');
    const lamp = document.getElementById('lamp');
    let quebrado;

    function lampOn (e) {
        if (!quebrado) {
            lamp.src = './assets/img/ligada.png';
        }
    }

    function lampOff (e) {
        if (!quebrado) {
            lamp.src = './assets/img/desligada.png';
        }
    }

    function lampBroken(e) {
        lamp.src = './assets/img/quebrada.png';
        quebrado = true
    }

    turnOn.addEventListener('click', lampOn);
    turnOff.addEventListener('click', lampOff);
    lamp.addEventListener('dblclick', lampBroken);
    lamp.addEventListener('mouseover', lampOn);
    lamp.addEventListener('mouseleave', lampOff);
}

init();