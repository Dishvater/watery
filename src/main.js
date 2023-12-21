const counter = document.querySelector('.counter--js');
const plus = document.querySelector('.plus--js');
const minus = document.querySelector('.minus--js');

let glasses = 0

const setCounter = (value) => {
    counter.innerHTML = value;
}

plus.addEventListener('click', () => {
    glasses++
    setCounter(glasses)
})

minus.addEventListener('click', () => {
    if (glasses > 0) {
    glasses--
    setCounter(glasses)
    }
    else {
        
    }
})