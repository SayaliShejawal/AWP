let counter = 1;
function decrement() {
    let counterEle = document.querySelector("#counterid");
    counter = counter - 1;
    counterEle.innerHTML = counter;

}

function increment() {
    let counterEle = document.querySelector("#counterid");
    counter = counter + 1;
    counterEle.innerHTML = counter;
}