export function displayTheForm() {
var form = document.createElement("form");
    form.id = "form";
    // form.setAttribute('method',"post");
    // form.setAttribute('action',"submit.php");
    
    //create input element
    var title = document.createElement("input");
    title.type = "text";
    title.name = "title";
    title.id = "title";
    title.placeholder = "New Task";

    var description = document.createElement("input");
    description.type = "text";
    description.name = "description";
    description.id = "description";
    description.placeholder = "Description";

    var dueDate = document.createElement("input");
    dueDate.type = "text";
    dueDate.name = "dueDate";
    dueDate.id = "dueDate";
    dueDate.placeholder = "Due Date";

    //create priotity dropdown
    var priorityList = document.createElement("select");
    priorityList.name = "priorityList";
    priorityList.id = "priorityList";

    var priorityLabel = document.createElement("Label");
    priorityLabel.setAttribute("for", 'priorityList');
    priorityLabel.innerHTML = "Priority";
    
    
    var opt = document.createElement('option');
    opt.innerHTML = 'Low';
    priorityList.appendChild(opt);

    var opt = document.createElement('option');
    opt.innerHTML = 'Medium';
    priorityList.appendChild(opt);

    var opt = document.createElement('option');
    opt.innerHTML = 'High';
    priorityList.appendChild(opt);
    
    //create a checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";
    checkbox.name = "checkbox";
    
    //create a submit button
    // var submit = document.createElement("input");
    // submit.type = "submit";
    // submit.value = "Submit";

    var submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Submit";
    submit.classList.add('submit-button')
    
    // add all elements to the form
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priorityLabel);
    form.appendChild(priorityList);
    form.appendChild(checkbox);
    form.appendChild(submit);

    

    
    // add the form inside the body
    document.getElementsByTagName('body')[0].appendChild(form);


    // submit logic 
    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        intakeFormData();
    });
 
}

function intakeFormData() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    // console.log(title);
    // console.log(description);
    // console.log(dueDate);

    if ((title == "") || (description == "") || (dueDate == "")) {
        alert('Please fill out all fields');
        return;
    }
    addTasksToLibrary(title, description, dueDate);
    document.getElementById('form').reset();
}


let myTasks= [];

function Task(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;

    // console.log(title);
    // console.log(description);
    // console.log(dueDate);
}

function addTasksToLibrary(title, description, dueDate) {
    let task = new Task(title, description, dueDate);
    myTasks.push(task);
    displayTasksOnPage();
}

function displayTasksOnPage() {

    const removeCards = document.querySelectorAll('.card');
    for (let i = 0; i < removeCards.length; i++) {
        removeCards[i].remove();
    }

    let index = 0;
    myTasks.forEach(task => {
        const card = document.createElement('div');
        card.classList.add('card');
        content.appendChild(card);
       
        for (let key in task) {
            const para = document.createElement('p');
            para.textContent = (`${key}: ${task[key]}`);
            card.appendChild(para);
        }
        index++;
    })
}

