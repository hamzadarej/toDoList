const addIt = () => {
  let userDate = document.querySelector("#userDate").value;
  let result = document.querySelector(".result");

  if (userDate != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userDate);
    let checkboxes = document.querySelector(".checkboxes");
    newLi.appendChild(text);
    result.appendChild(newLi);

    newLi.style.color = colorGen();
    const doneButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    doneButton.innerHTML = "✓";
    deleteButton.innerHTML = "✗";
    checkboxes.appendChild(doneButton);
    checkboxes.appendChild(deleteButton);
    const check = () => newLi.classList.toggle("completed");
    const del = () => {
      newLi.remove();
      doneButton.remove();
      deleteButton.remove();
    };
    deleteButton.addEventListener("click", del);
    deleteButton.style.color = "red";
    deleteButton.style.border = "red 2px solid";
    doneButton.style.color = "green";
    doneButton.style.border = "green 2px solid";
    doneButton.addEventListener("click", check);
    document.querySelector("#userDate").value = "";
  } else {
    document.querySelector("#userDate").placeholder = "please enter text first";
  }
};
const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};
const keyCheck = (e) => {
  if (e.key == "Enter") addIt();
};
const userInput = document.querySelector("#userDate");
userInput.addEventListener("keypress", keyCheck);
