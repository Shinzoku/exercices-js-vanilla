const btnNode = document.querySelector('.js-counter');
const incBtnNode = document.querySelector('.js-inc-btn');
const resetBtnNode = document.querySelector('.js-reset-btn');


let counter = 0;
console.log(counter)

function display() {
    btnNode.innerHTML = counter;
}

function increment() {
    counter += 1;
}

function reset() {
    counter = 0;
}

incBtnNode.addEventListener("click", () => {
    increment()
    display();
})

resetBtnNode.addEventListener("click", () => {
    reset()
    display();
})

display();