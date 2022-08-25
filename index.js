btnC2F=document.getElementById("#c2fbtn")
btnF2C=document.getElementById("#f2cbtn")
inpC2F=document.getElementById("#c2f")
inpF2C=document.getElementById("#f2c")
let result=0
document.getElementById("c2fbtn").addEventListener("click",con)
function con(){
    inpC2F=document.getElementById("c2f").value 
    result=9/5*inpC2F+32
    console.log(result)
    document.getElementById("result").innerText=result+" °F"
}
