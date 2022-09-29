export function initializeWebsite() {
    const content = document.getElementById('content');
    content.replaceChildren();

    content.appendChild(createTitle("Welcome to"));
   
    content.appendChild(createParagraph("CONVERGE."));
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