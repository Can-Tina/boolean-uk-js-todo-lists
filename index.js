/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", users);

console.log("todos: ", todos);


/*for (let i = 0; i < users.length; i++) {
    alert(users[i].id + ", " + users[i].name + ", " + users[i].address.city)
}*/

const usersId = prompt("What's your ID");
const addNew = prompt("Would you like to add a new item (add) or read your list (read)?");

if (addNew === "add") {
    const newObject = {}
    newObject.userId = usersId
    newObject.id = (todos.length + 1)
    const addItem = prompt("What would you like to add?")
    newObject.title = addItem
    const addComplete = prompt("Has it been completed? (true) or (false)")
    newObject.completed = addComplete
    todos.push(newObject)
    alert("Item added")
}

else {
    let usersTodo = [""];

    for (let i = ((usersId - 1)* 20); i < (usersId * 20); i++) {
    usersTodo.push(todos[i].title)
    };

    alert(users[usersId].username + "\n \n" + usersTodo.slice(0,));
};



