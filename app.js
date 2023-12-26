let gameSeq = []; 
let userSeq = [];

let started = false; 
let level = 0; 

let btns = ["yellow", "red", "purple", "green"]; 

let h2 = document.querySelector("h2"); 


document.addEventListener("keypress", function(){

    if(started == false){
        console.log("Game is started!"); 
        started = true; 
        levelUp(); 
    }
});

function btnFlash(btn){
    btn.classList.add("flash"); 
    setTimeout(function(){
        btn.classList.remove("flash");
    },250); 
}

//user press the button then background color is green 

function userflash(btn){
    btn.classList.add("userflash"); 
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250); 
}

function levelUp (){

    // user seq reset start from begin 

    userSeq = []; 
    level++; 
    h2.innerText = `Level ${level}`; 

    let randomIndex = Math.floor(Math.random() * 3); 
    let randomColor = btns[randomIndex]; 
    let randomButton = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor); 
    console.log(gameSeq); 

    // console.log(randomButton); 
    // console.log(randomColor); 
    // console.log(randomIndex);  
    //random btn choose 
    btnFlash(randomButton); 
}

function checkAns(idx){
    // console.log("current level", level); //check level 
    // let idx = level - 1; 

    if(userSeq[idx] == gameSeq[idx]){
        // console.log("Same Value!"); 
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1500); 
        }
    }
    else{
        h2.innerHTML = `Game Over! your score was <b> ${level} </b> press any key to start`;  //In innerText we cannot generate tags 
        document.querySelector("body").style.backgroundColor = "red"; 
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"; 
        }, 1000); 
        reset(); 
    }
}

function btnPress(){

    // console.log("Button was pressed!"); 
    //after button press what work you will do to write code in this function
    
    // console.log(this); 

    let btn = this; 
    userflash(btn);   //press button then flash call btnFlash

    userColor = btn.getAttribute("id"); //from html id access
    userSeq.push(userColor);   //select color from user 

    checkAns(userSeq.length -1); 
}



//access buttons from html page 

let allBtns = document.querySelectorAll(".btn"); 

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function reset(){
    started = false; 
    gameSeq = []; 
    userSeq = []; 
    level = 0; 
}