const openbutton=document.getElementById("openbutton")
const form1=document.getElementById("form1")
const closebutton=document.getElementById("closebutton")
const lastbutton=document.getElementById("lastbutton")

openbutton.addEventListener('click', () =>{.style.display="block"});

closebutton.addEventListener('click',() =>{.style.display="none"});
 
form1.addEventListener("submit"),(e) =>{e.preventDefault();

    const info1=document.getElementById("info1").value;
    const info2=document.getElementById("info2").value;
    const info3=document.getElementById("info3").value;
    const info4=document.getElementById("info4").value;
    const info5=document.getElementById("info5").value;

   if (name===""){document.getElementById("nameerror")=innerHTML="name is requird"} 