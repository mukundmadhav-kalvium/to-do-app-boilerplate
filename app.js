//Input tag
var inputText = document.getElementById("input")

//Add button tag
var subBtn = document.getElementById("button")

//Todo List
var toDoListTag = document.getElementById("todolist")

//& Array to store all todo elements, initially empty
var todoArr = []

//When Add Button is clicked
subBtn.addEventListener("click", addItemToArray)

//If Input is on FOCUS and Enter is clicked addItemToArray should be called to add element to array
inputText.addEventListener("keypress",(event)=>{
    // console.log(event.key)
    if (event.key=="Enter"){
        addItemToArray()
    }
})

function addItemToArray(){
    //*push the value to array if its not an empty string
    if(inputText.value!=""){
        todoArr.push(inputText.value)
    }
    //reset the value to empty array
    inputText.value=""

    display()
} 

function display(){
    //Clear out previous old ones everytime we add one item to array and display it
    toDoListTag.innerHTML = "";
    todoArr.map((curr,i)=>{
        //Structure of li tag
        var listItem = `<li id="item">
        <div>${curr}</div>
        <div>
          <span onclick="deleteItem(${i})">&times;</span>
          <span>|</span>
          <span onclick="editItem(${i})">Edit</span>
        </div>
    </li> `;

    toDoListTag.innerHTML += listItem
    });
}

function deleteItem(index){

    //delete the element[index] from todoArr
    todoArr.splice(index,1)
    display();
}

function editItem(index){
    var newValue = prompt("Edit")
    todoArr.splice(index,1,newValue);
    display();
}

//reset the todo list
document.getElementById("reset").addEventListener("click",()=>{
    todoArr=[]
    display()
})