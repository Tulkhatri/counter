

document.getElementById("increment").addEventListener("click", () => {
    document.getElementById("display").innerHTML = counter(true);

});
document.getElementById("decrement").addEventListener("click", () => {
    document.getElementById("display").innerHTML = counter();


});
const counter = (() => {
    let count = 0;
    return (getid) => {
        if (count <= 0) {
            count = 1;
        }
        getid ? count++ : count--
        return count;
    }
})();



