export function displayTheForm() {
var form = document.createElement("form");
    form.setAttribute('method',"post");
    //form.setAttribute('action',"submit.php");
    
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
    dueDate.name = "task_name";
    dueDate.id = "task_name";
    dueDate.placeholder = "Due Date";
    
    //create a checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";
    checkbox.name = "checkbox";
    
    //create a button
    var submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Submit";
    
    // add all elements to the form
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(checkbox);
    form.appendChild(submit);
    
    // add the form inside the body
    document.getElementsByTagName('body')[0].appendChild(form);

}