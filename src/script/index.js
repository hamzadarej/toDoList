const addIt= () =>{
 let userDate = document.querySelector("#userDate").value;  
 let result=document.querySelector(".result");
 let checkbox =document.createElement("input");
 let checkboxes=document.querySelector(".checkboxes");
 checkbox.type="checkbox";
 if (userDate!=""){
     let newLi =document.createElement("li");
     let text = document.createTextNode(userDate);
     newLi.appendChild(text);
     result.appendChild(newLi);
     checkboxes.appendChild(checkbox);
     
     document.querySelector("#userDate").value="";
 }
 else {
     document.querySelector("#userDate").placeholder="please enter text first";
 }
}