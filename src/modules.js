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
    
    
    var optLow = document.createElement('option');
    optLow.innerHTML = 'Low';
    priorityList.appendChild(optLow);

    var optHigh = document.createElement('option');
    optHigh.innerHTML = 'High';
    priorityList.appendChild(optHigh);
    
    //create a checkbox
    // var checkbox = document.createElement("input");
    // checkbox.type = "checkbox";
    // checkbox.id = "checkbox";
    // checkbox.name = "checkbox";
    
    //create a submit button
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
    // form.appendChild(checkbox);
    form.appendChild(submit);

        // add the form inside the body
    document.getElementsByTagName('body')[0].appendChild(form);


    // submit logic 
    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        intakeFormData();
        // hide form
        form.replaceChildren();
    });
}

function intakeFormData() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    let priorityList = document.getElementById('priorityList').value;
    // let checkbox = document.getElementById('checkbox').value;
    // console.log(checkbox);
    // console.log(dueDate);

    if ((title == "") || (description == "") || (dueDate == "") || (priorityList == "")) {
        alert('Please fill out all fields');
        return;
    }
    addTasksToLibrary(title, description, dueDate, priorityList);
    document.getElementById('form').reset();
}


let myTasks= [];
let completed= [];


function Task(title, description, dueDate, priorityList) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priorityList = priorityList;

    //console.log(priorityList);
    // console.log(description);
    // console.log(dueDate);
}

function addTasksToLibrary(title, description, dueDate, priorityList) {
    let task = new Task(title, description, dueDate, priorityList);
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

        // var completedLabel = document.createElement("Label");
        // completedLabel.setAttribute("for", 'checkbox');
        // completedLabel.innerHTML = "Completed";

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
        checkbox.name = "checkbox";
        card.appendChild(checkbox);

        checkbox.dataset.linkedArray = index;
        checkbox.addEventListener('click', moveToCompleted);
        function moveToCompleted() {
            let completedTask = checkbox.dataset.linkedArray;
            myTasks.splice(parseInt(completedTask), 1);
            completed.push(task);
            //displayCompletedTasks();
            displayTasksOnPage();
            //console.log(completed);
        }

        index++;
    })
}

// function displayCompletedTasks() {
//     const removeCardsC = document.querySelectorAll('.cardC');
//     for (let i = 0; i < removeCardsC.length; i++) {
//         removeCardsC[i].remove();
//     }

//     let index = 0;
//     completed.forEach(taskC => {
//         const cardC = document.createElement('div');
//         cardC.classList.add('cardC');
//         content.appendChild(cardC);
       
//         for (let key in taskC) {
//             const paraC = document.createElement('p');
//             paraC.textContent = (`${key}: ${taskC[key]}`);
//             cardC.appendChild(paraC);
//         }

//         // var checkbox = document.createElement("input");
//         // checkbox.type = "checkbox";
//         // checkbox.id = "checkbox";
//         // checkbox.name = "checkbox";
//         // card.appendChild(checkbox);

//         // checkbox.dataset.linkedArray = index;
//         // checkbox.addEventListener('click', moveToCompleted);
//         // function moveToCompleted() {
//         //     let completedTask = checkbox.dataset.linkedArray;
//         //     myTasks.splice(parseInt(completedTask), 1);
//         //     myTasks.push(task);
//             // displayCompletedTasks();
//             // displayTasksOnPage();
//             console.log(completed);
//         }

//         index++;
//     }

