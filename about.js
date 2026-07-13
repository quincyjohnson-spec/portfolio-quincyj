console.log("connected ");

let futton1 = document.getElementById("futton");
let choices = [
"My middle name is malik"
];
function falert () {
    let randomIndex = Math.floor(Math.random() * choices.length);
    alert(choices[randomIndex]);

}
futton1.addEventListener('click', falert) 