let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");


const play = (userchoice)=>{
    console.log("user choice is = ", userchoice);
    //generate computer choice
    const compChoioce = comChoice();
    console.log("computer choice is =", compChoioce);
}
function comChoice(){
    const option=["rock", "paper", "secisor"];
    const random = Math.floor(Math.random() * 3);
    return option[random];
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
       const userchoice = choice.getAttribute("id");
       console.log(userchoice);
    })
})

