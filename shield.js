const elrond = require('./elrond')

window.addEventListener('keydown', (event) => {
    console.log(event);
    if(event.key === 'elrond.js') {
        event.preventDefault();
        alert('KUNAMI');
    }
})