const addIt= () =>{
 let userDate = document.querySelector("#userDate").value;  
 let result=document.querySelector(".result");
 if (userDate!=""){
     let newLi =document.createElement("li");
     let text = document.createTextNode(userDate);
     newLi.appendChild(text);
     result.appendChild(newLi);
     document.querySelector("#userDate").value="";
 }
 else {
     document.querySelector("#userDate").placeholder="please enter text first";
 }
}