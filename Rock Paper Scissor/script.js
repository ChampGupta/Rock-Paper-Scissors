var a=0
let userScore=document.querySelector("#user")
var b=0
let systemScore=document.querySelector("#system")
const choice=document.querySelectorAll(".option")
const selectedChoice=(userChoice)=>{
    const systemChoice=genSystemChoice();
    // console.log(userChoice)
    // console.log(systemChoice)
    if(userChoice==systemChoice){
        // console.log("Tie")
    }else if(userChoice=="rock" && systemChoice=="paper"){
        // console.log("System");
        b++;
        systemScore.innerText=`System :${b}`;
    }else if(userChoice=="paper" && systemChoice=="scissors"){
        // console.log("System");
        b++;
        systemScore.innerText=`System :${b}`;
    }else if(userChoice=="scissors" && systemChoice=="rock"){
        // console.log("System")
        b++;
        systemScore.innerText=`System :${b}`;
    }else{
        // console.log("User")
        a++;
        userScore.innerText=`User :${a}`
    }
}
choice.forEach((val)=>{
    val.addEventListener("click", ()=>{
    const userChoice=val.getAttribute("id");
    selectedChoice(userChoice)
    })
})
const genSystemChoice=()=>{
    let n=Math.floor(Math.random()*3);
    if(n==0){
        return "rock";
    }
    else if(n==1){
        return "paper"
    }else{
        return "scissors"
    }
}
let resetBtn=document.querySelector("#reset");
resetBtn.addEventListener("click", ()=>{
    a=0
    b=0
    userScore.innerText=`User :${a}`
    systemScore.innerText=`System :${b}`;
})