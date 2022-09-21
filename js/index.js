const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const btnStart = document.getElementById("btnStart");

btnStart.addEventListener("click",(e)=>{
    if(p1.value == "" || p2.value == ""){
        document.getElementById("error").innerHTML = "Please Enter name of players";
        e.preventDefault();
    }
    else{
        localStorage.setItem("p1",p1.value);
        localStorage.setItem("p2",p2.value);
    }
})