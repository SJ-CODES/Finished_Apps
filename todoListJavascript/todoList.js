 

let btnAddTask = document.getElementById("btnAddTask")
let taskTextBox = document.getElementById("taskTextBox")

let taskEntered = document.getElementById("taskEntered")

let pendingTasks = document.getElementById("pendingTasks")
let completedTasks = document.getElementById("completedTasks")


btnAddTask.addEventListener("click", function() {
    
   

    let taskName = taskTextBox.value
    let liItem = document.createElement("li")

    liItem.innerHTML = taskName
    


    let taskCheckBox = document.createElement("input")
    taskCheckBox.setAttribute("type" , "checkbox")
    

   
   

    
    let removeButton = document.createElement("button")
    removeButton.innerHTML ="Remove"
   

    
    
    
    
    liItem.appendChild(taskCheckBox)
    
    liItem.appendChild(removeButton)
    pendingTasks.appendChild(liItem)

    
})

 






 