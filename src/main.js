const counter = document.querySelector('.counter--js');
const plus = document.querySelector('.plus--js');
const minus = document.querySelector('.minus--js');

let glasses = 0

// let glasses = localStorage.getItem('glasses');

let key = new Date().toISOString().slice(0, 10);

setInterval(()=> {
    if(key !== new Date().toISOString().slice(0, 10)) {
        key = new Date().toISOString().slice(0, 10)
        setCounter(0)
    }
}, 1000)

const setCounter = (value) => {
    counter.innerHTML = value;
    localStorage.setItem(key, value);
}

if (localStorage.getItem(key)) {
    glasses = parseInt(localStorage.getItem(key));
    setCounter(glasses);
} else {
    
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