import { displayTheForm } from "./modules";
import { myTasks } from "./modules";

export function initializeWebsite() {
    const content = document.getElementById('content');
    content.replaceChildren();

    content.appendChild(createTitle("To Do List"));
   
    createFormButton();


}

function createFormButton() {
    var newTaskButton = document.createElement("button");
    newTaskButton.textContent = "New Task";
    content.appendChild(newTaskButton);
    newTaskButton.addEventListener("click", displayTheForm);

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