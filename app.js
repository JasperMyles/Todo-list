
let input = prompt("Ok, Add a Todo-List");

const myList = ['My Name is', 'This is an array'];

while(input !== 'quit' && input !== 'q') {

    if(input === 'list'){
       console.log("*****************")
       for (let i = 0; i < myList.length; i++){
        console.log(`${i}: ${myList[i]}`)

       }
       console.log("*****************")
        
    }
    
     else if (input === 'new'){
        const newTodo = prompt('Ok, what is the new todo?');
        myList.push(newTodo);
        console.log(`${newTodo} added to the List!`);
    } 

     else if (input === 'delete') {
    const index = parseInt(prompt("Ok, enter an index to delete:"))
     if(!Number.isNaN(index)){
        const deleted = myList.splice(index, 1);
        console.log(`Ok, deleted ${deleted[0]}`);
     }
     } else {
    console.log("Unknown index")
     }
    

   
    input = prompt('What would you like to do?')
}

console.log("Ok, you quit the app");