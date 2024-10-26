let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#Reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer= document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

//variables

let turnO = true  //playerX,playerO

let count=0; //to track draw
const winpatterns = [
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8]
];
 const resetGame= ()=>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
 };


boxes.forEach((box) =>{             // to addevent listener
    box.addEventListener("click",() =>  {
        console.log("Box was clicked");
        if (turnO){
            //playerO
            box.innerText = "O";
            turnO = false;
        } else {
            //playerX
            box.innerText = "X"
            turnO = true;
        }
        box.disabled =true;
        count++;
       let iswinner= checkwinner();

       if (count === 9 && !iswinner){
             gameDraw();
       }
    });

});

const gameDraw= () =>{
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled= true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
};



const showWinner = (winner) => {
    msg.innerText = `Congratulation,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const  checkwinner =() => {  
      for ( let pattern of winpatterns) {
           let pos1val=boxes[pattern[0]].innerText;  
           let pos2val=boxes[pattern[1]].innerText;  
           let pos3val=boxes[pattern[2]].innerText;  


           if(pos1val !="" && pos2val !="" &&  pos3val !=""){
               if(pos1val===pos2val  &&  pos2val===pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
               }
           }
      }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



