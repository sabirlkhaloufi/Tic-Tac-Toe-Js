const firstPlayer = document.querySelector(".player1");
const secondPlayer = document.querySelector(".player2");
const AllCases = document.querySelectorAll(".case");
const btnReset = document.querySelector(".btnReset");
let casContent = "O";
let content = [];
let gagne = false;

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


btnReset.addEventListener("click",()=>{
    AllCases.forEach(cas => {
        cas.innerHTML="";
        casContent="O";
        content = [];
    });
})


function calcResult(){
    content = [];
    AllCases.forEach(cas => {
        content.push(cas.innerHTML);
    });
    
    testRows();
    testColumn();
    testX();

    function viewResult(status){
        gagne = true;
        if(status == "X"){
            console.log(firstPlayer.innerHTML + " " + "gangne")
        }
        else{
            console.log(secondPlayer.innerHTML + " " + "gangne")
        }
    }

    function testRows(){
        if(content[0] == content[1] && content[1] == content[2] && content[2] != ""){
            viewResult(content[0]);
        }
        if(content[3] == content[4] && content[4] == content[5] && content[5] != ""){
            viewResult(content[3]);
        }
        if(content[6] == content[7] && content[7] == content[8] && content[8] != ""){
            viewResult(content[6]);
        }
    }

    function testColumn(){
        if(content[0] == content[3] && content[3] == content[6] && content[6] != ""){
            viewResult(content[0]);
        }
        if(content[1] == content[4] && content[4] == content[7] && content[7] != ""){
            viewResult(content[1]);
        }
        if(content[2] == content[5] && content[5] == content[8] && content[8] != ""){
            viewResult(content[2]);
        }
    }

    function testX(){
        if(content[0] == content[4] && content[4] == content[8] && content[8] != ""){
            viewResult(content[0]);
        }
        if(content[2] == content[4] && content[4] == content[6] && content[6] != ""){
            viewResult(content[2]);
        }
    }

}




