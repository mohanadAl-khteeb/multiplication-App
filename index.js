const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const questoin = document.getElementById("text");
const formEl = document.getElementById("form");
const Answer = num1 * num2;
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));
scoreEl.innerText = `score: ${score}`;
if(!score)
{
    score = 0;
}
questoin.innerText = `What is multiply ${num1} by ${num2} ?`;
formEl.addEventListener("submit",()=>{
    const userAnswer = +inputEl.value;
    if(Answer === userAnswer){
        score++;
        updatelocalStorage()
    }
    else{
        score--;
        updatelocalStorage()
    }
})
function updatelocalStorage(){
    localStorage.setItem("score", JSON.stringify(score) )
}