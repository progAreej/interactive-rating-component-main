const submit = document.getElementById("submit");
const one = document.getElementById("one");
const two = document.getElementById("two");
const select = document.getElementById("select");
const all = document.getElementsByClassName("allnum");
const numbers = document.getElementsByClassName("num");

for (let i = 0; i < numbers.length; i++) {
    numbers[i].onclick=function(){
    var nn=numbers[i];
    console.log(nn);
    let txt=nn.innerText;
    console.log(txt);
    select.innerHTML=txt;
    }}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('mouseover', () => {
        numbers[i].style.background = "hsl(25, 97%, 53%)";
        if (i > 0) {
            numbers[i - 1].style.background = "hsl(216, 12%, 54%)";
            numbers[i - 1].style.color = "white";
        }
        numbers[i].style.color = "white";

        numbers[i].addEventListener('mouseout', () => {
            numbers[i].style.background = "hsl(216, 12%, 8%)";
            if (i > 0) {
                numbers[i - 1].style.background = "hsl(216, 12%, 8%)";
                numbers[i - 1].style.color = "hsl(216, 12%, 54%)";
            }
            numbers[i].style.color = "hsl(216, 12%, 54%)";
        });
    });
}
submit.onclick = function() {
    one.style.display = "none";
    two.style.display = "block";
};

submit.addEventListener('mouseover', () => {
    submit.style.color = "white";
    submit.style.background = "hsl(25, 97%, 53%)";
});

submit.addEventListener('mouseout', () => {
    submit.style.color = "hsl(25, 97%, 53%)";
    submit.style.background = "white";
});


