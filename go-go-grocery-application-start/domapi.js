// store references to UL, input and add button in variables
let listItem = document.getElementById('listItem');
let addButton = document.querySelector('#listItem + input');
let ul = document.querySelector('ul');

//Register an event handler
addButton.onclick = (e) => {
    //prevent default behaviour
    e.preventDefault();

    //create element to add to the list
    let li = document.createElement('li');
    let delButton = document.createElement('button');

    //build out the list of items
    let item = listItem.value;
    li.textContent = item;
    delButton.textContent = 'Got It!';

    //append things
    li.appendChild(delButton);
    ul.appendChild(li);

    //add event listener
    delButton.onclick = deleteIt;
};

//define the deleteIt function
function deleteIt(e) {
    alert('Are You Sure You Want To Delete?');
    let deleteItem = e.target.closest('li');
    deleteItem.remove();
}