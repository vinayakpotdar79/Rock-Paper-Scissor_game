let uimg=document.getElementById("userimg");
let compimg=document.getElementById("compimg");
let okbtn =document.getElementById("done");
let round=document.getElementById("round");
let displayscore=document.querySelector(".score");
let uscore =document.getElementById("uscore");
let compscore =document.getElementById("compscore");
let options=document.querySelectorAll(".options");
let choices=["Rock","Paper","Scissor"];
 let countwin=0;
let compwin=0;
let roundsPlayed = 0;
let userScoreElement = document.createElement("h3");
let compScoreElement = document.createElement("h3");
okbtn.addEventListener("click",()=>
{    if(round.value<=0)
    alert("Enter Valid Number Of Rounds");
    else{
    okbtn.style.display="none";
  round.style.display="none";
  score();
    }
});

let score=()=>{
    uscore.innerHTML = "";
    compscore.innerHTML= "";
    userScoreElement.innerText = `Your score (${countwin} / ${round.value})`;
    compScoreElement.innerText = `computer score (${compwin} / ${round.value})`;
    uscore.append(userScoreElement);
    compscore.append(compScoreElement);  
}
  //play game
   options.forEach(
   (option)=> {
    option.addEventListener("click",()=>
    {    let uchoice=option.getAttribute("id");
         uimg.classList.add("shakeuser");
         compimg.classList.add("shakecomputer");
        let randidx= Math.floor(3*Math.random());
        let compchoice=choices[randidx];
        startshaking(uchoice,compchoice);
        if(uchoice===compchoice){
           return; 
        }
       let userwin=result(uchoice,compchoice);
       if(userwin){
        countwin++;
       }
       else compwin++;
       score();
       roundsPlayed++;
       if (roundsPlayed >= round.value) {
        displayResult();
      }
    }
    )
    }
);

function startshaking(uchoice,compchoice) {
    setTimeout(() => {
      uimg.classList.remove('shakeuser'); 
    compimg.classList.remove('shakecomputer'); // Stop shaking after 3 seconds
    uimg.src=uchoice+"user.png";
    compimg.src=compchoice+"comp.png";
      }, 1000); // 3000 milliseconds = 3 seconds
  }
let result=(uchoice,compchoice)=>{  
    if(uchoice==="Rock"){
       return compchoice==="Paper"? false:true;
    }
   else if(uchoice==="Paper"){
       return compchoice==="Scissor"? false:true;
    }
    else{
        return compchoice==="Rock"? false:true;
    }
 
}

let displayResult = () => {
    let msgbox = document.createElement("h2"); // Create result display element
    msgbox.classList.add("msg-box");
    let newgame = document.createElement("button"); // New Game button
    newgame.innerText="New Game";
    newgame.classList.add("new-game");
        // Determine game outcome
    if (countwin > compwin) {
        msgbox.innerText = "You Won :)";
    } else if (countwin < compwin) {
        msgbox.innerText = "You Lost :(";
    } else {
        msgbox.innerText = "It is a Tie!!";
    }
         // Display the result
    displayscore.append(msgbox);
    displayscore.append(newgame);

    newgame.addEventListener("click",()=>{ //reset game
        countwin = 0;
    compwin = 0;
    roundsPlayed = 0;
    msgbox.remove();
    // Reset input fields and buttons
   round.value="";
   round.style.display="block";
   okbtn.style.display="block";
   uimg.src="Rockuser.png";
   compimg.src="Rockcomp.png";
   score();
   userScoreElement.innerText ="";
   compScoreElement.innerText = "";
   newgame.remove();
    });
};
 
