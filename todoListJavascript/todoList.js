 

let btnAddTask = document.getElementById("btnAddTask")
let taskTextBox = document.getElementById("taskTextBox")



let pendingTasks = document.getElementById("pendingTasks")
let completedTasks = document.getElementById("completedTasks")


btnAddTask.addEventListener("click", function() {

    let taskName = taskTextBox.value
    let liItem = document.createElement("li")

   
    


    let taskCheckBox = document.createElement("input")
    taskCheckBox.setAttribute("type" , "checkbox")
    taskCheckBox.addEventListener("change", function(){
        if(this.checked) {
            console.log(this.parentElement)
            completedTasks.appendChild(this.parentElement)
        }else {
            pendingTasks.appendChild(this.parentElement)

        }
        
    })

   
   

    let taskLabel = document.createElement("Label")
    taskLabel.innerHTML = taskName

    let removeButton = document.createElement("button")
    removeButton.innerHTML ="Remove"
    removeButton.addEventListener("click", function() {
        this.parentElement.remove()
    })
   

    
    
    
    
    
    
    
    liItem.appendChild(taskCheckBox)
    liItem.appendChild(taskLabel)
    liItem.appendChild(removeButton)

    pendingTasks.appendChild(liItem)

    

    
})

 






 