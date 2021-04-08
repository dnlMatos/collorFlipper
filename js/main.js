var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.querySelector(".btn");
var color = document.querySelector('.corHexadecimal');
btn.addEventListener("click", function(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[valorAleatorio()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function valorAleatorio() {
    return Math.floor(Math.random() * hex.length)
}
