const firstPlayer = document.querySelector(".player1");
const secondPlayer = document.querySelector(".player2");
const AllCases = document.querySelectorAll(".case");
const btnReset = document.querySelector(".btnReset");
let casContent = "O";
let content = [];
let  i = 0;

getNamePlayers();
function getNamePlayers(){
    firstPlayer.innerHTML = "P1:" +" "+ localStorage.getItem("p1");
    secondPlayer.innerHTML = "P2:" +"  " +localStorage.getItem("p2");  
}

AllCases.forEach(cas => {
    cas.addEventListener("click",()=>{
        if(cas.innerHTML == ""){
            if(casContent == "X"){
                cas.innerHTML = "O"
                casContent="O";
            }
            else{
                cas.innerHTML = "X"
                casContent="X"
            }
            calcResult();
        }
    })
});

function Reset(){
    AllCases.forEach(cas => {
        cas.innerHTML="";
    });
    casContent="O";
    content = [];
    i = 0;
}

btnReset.addEventListener("click",()=>{
    Reset();
})

function calcResult(){
    content = [];
    AllCases.forEach(cas => {
        content.push(cas.innerHTML);
    });

    testRows();
    testColumn();
    testX();
    
    if(i==27){
        Reset();
    }
}

function viewResult(caracter){

    if(caracter == "X"){
        document.querySelector(".result").classList.remove("d-none");
        document.querySelector(".Pwin").innerHTML = firstPlayer.innerHTML;
    }
    else{
        document.querySelector(".result").classList.remove("d-none");
        document.querySelector(".Pwin").innerHTML = secondPlayer.innerHTML;
    }
}

function testRows(){
    if(content[0] == content[1] && content[1] == content[2] && content[2] != ""){
        viewResult(content[0]);
    }
    else if(content[3] == content[4] && content[4] == content[5] && content[5] != ""){
        viewResult(content[3]);
    }
    else if(content[6] == content[7] && content[7] == content[8] && content[8] != ""){
        viewResult(content[6]);
    }
    else{
        i++;
    }
}

function testColumn(){
    if(content[0] == content[3] && content[3] == content[6] && content[6] != ""){
        viewResult(content[0]);
    }
    else if(content[1] == content[4] && content[4] == content[7] && content[7] != ""){
        viewResult(content[1]);
    }
    else if(content[2] == content[5] && content[5] == content[8] && content[8] != ""){
        viewResult(content[2]);
    }
    else{
        i++;
    }
}

function testX(){
    if(content[0] == content[4] && content[4] == content[8] && content[8] != ""){
        viewResult(content[0]);
    }
    else if(content[2] == content[4] && content[4] == content[6] && content[6] != ""){
        viewResult(content[2]);
    }
    else{
        i++;
    }
}




