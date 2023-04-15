const inputBox = document.getElementById("input-task")
const listContainer = document.getElementById("todo")

function addtask(){
  if(inputBox.value === ''){
    alert("O campo não pode estar em branco!")
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "x";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");  
      saveData(); 
    }
    else if(e.target.tagName === "SPAN"){
      const resultado = window.confirm("Tem certeza que deseja deletar?");
      if (resultado) {
        e.target.parentElement.remove();
      }
      else{
        
      }
      saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();