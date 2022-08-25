document.getElementById("f2cbtn").addEventListener("click",con1)
function con1(){
    inpF2C=document.getElementById("f2c").value 
    result=5/9*(inpF2C-32)
    document.getElementById("result").innerText=result+" °C"
}