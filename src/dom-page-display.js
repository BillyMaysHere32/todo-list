import { displayTheForm } from "./modules";

export function initializeWebsite() {
    const content = document.getElementById('content');
    content.replaceChildren();

    content.appendChild(createTitle("five 4 3 2 1"));
   
    content.appendChild(createParagraph("test."));

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