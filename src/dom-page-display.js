import { displayTheForm } from "./modules";


export function initializeWebsite() {
    const content = document.getElementById('content');
    content.replaceChildren();

    content.appendChild(createTitle("To Do List"));
    
    // create dive for form
    const formDiv = document.createElement("div");
    formDiv.classList.add('form-div')
    content.appendChild(formDiv);
   
    createFormButton();
}

function createFormButton() {
    var form = document.querySelector('.form-div');
    var newTaskButton = document.createElement("button");
    newTaskButton.textContent = "New Task";
    form.appendChild(newTaskButton);
    newTaskButton.addEventListener("click", function(e) {
        //form.replaceChildren();
        displayTheForm(); 
    }); 
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }

  function createTitle(text) {
    const title = document.createElement("h2");
    title.textContent = text;
    return title;
}
