class Controller {
    constructor(service) {
        this.service = service;

        this.nameinput = document.getElementById("name");
        this.descriptioninput = document.getElementById("description");
        this.addbtn = document.getElementById("addbtn");
        this.todocontainer = document.getElementById("todocontainer");
        this.totaltodos = document.getElementById("totalTodos");
        this.completedtodos = document.getElementById("completedTodos");
        this.pendingtodos = document.getElementById("pendingTodos");
        this.searchinput = document.getElementById("search-todo");
        this.addbtn.addEventListener('click', () => this.handleAddTodo());
        this.togglebtn=document.getElementById("theme-toggle");
        this.searchinput.addEventListener("input", () => 
            this.render()
        );

        this.togglebtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });

        this.todocontainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("remove-btn")) {
                const id = parseInt(e.target.dataset.id);
                this.handleRemoveTodo(id);
            }
        });

       
        this.todocontainer.addEventListener("change", (e) => {
            if (e.target.classList.contains("todo-checkbox")) {
                const id = parseInt(e.target.dataset.id);
                const completed = e.target.checked;
                this.handleCheck(id, completed);
            }
        });
         
        this.todocontainer.addEventListener("click",(e)=>{
            if(e.target.classList.contains("todo-edit")){
                const id=parseInt(e.target.dataset.id);
                console.log(id)
                this.handleedit(id);
            }
        })
    }

    updatestats(){
        const total=this.service.getalltodos().length;
        console.log(total)
        const completedtodos=this.service.getalltodos().filter((t)=>t.completed).length;
        console.log(total)
        const pending=total-completedtodos;
        console.log(pending)
        this.totaltodos.textContent=parseInt(total);
        this.completedtodos.innerHTML=completedtodos;
        this.pendingtodos.innerHTML=pending;

    }

    handleAddTodo() {
        const name = this.nameinput.value.trim();
        const description = this.descriptioninput.value.trim();

        if (!name || !description) {
            alert("Please enter valid name and description");
            return;
        }

        const todo = new todostructure(name, description);
        this.service.addtodo(todo);

        this.nameinput.value = "";
        this.descriptioninput.value = "";

        this.render();
    }

    handleRemoveTodo(id) {
        this.service.deletetodo(id);
        this.render();
    }

    handleCheck(id, completed) {
        this.service.markcompleted(id, completed);
        this.render();
    }
    handleedit(id){
        const todo=this.service.todos.find((t)=>t.id===id);
        if(!todo.editing){
            todo.editing=true;
            this.render();
            return;
        } 
        
        const container=document.querySelector(`[data-id="${id}"]`).parentNode;
        const name=container.querySelector(`.edit-input`);
        if(!container){console.error("name not found");return;}
        const description=container.querySelector(`.edit-description`);
        this.service.updatetodo(id,name.value,description.value);
        todo.editing=false;
        this.render();
    
    }
 
    render() {

    const searchtext=this.searchinput.value.trim().toLowerCase();
    let todorender=this.service.getalltodos();

    if(searchtext){
            todorender=this.service.searchtodo(searchtext);
        }
    this.todocontainer.innerHTML = "";

    todorender.forEach((info) => {
        this.todocontainer.innerHTML += `
        
        <div class="todo-item p-4  rounded-lg shadow 
                    ${info.completed ? "bg-green-100" : "bg-red-100"} 
                    flex flex-col gap-3"
                    data-id="${info.id}">

            
            ${
                info.editing
                ? `
                    <input type="text" 
                           class="edit-input border p-2 rounded w-full"
                           value="${info.name}"
                           >

                    <input type="text" 
                           class="edit-description border p-2 rounded w-full"
                           value="${info.description}"
                           >
                  `
                : `
                    <h3 class="text-xl font-semibold text-gray-800">${info.name}</h3>
                    <p class="text-gray-700">${info.description}</p>
                  `
            }

            
            <div class="flex items-center justify-between mt-2">

               
                <button class="remove-btn bg-red-500 text-white px-4 py-2 rounded 
                               hover:bg-red-600 transition"
                        data-id="${info.id}">
                    Remove
                </button>

                
                <label class="flex items-center gap-2 text-gray-700">
                    <input type="checkbox"
                           class="todo-checkbox h-5 w-5"
                           data-id="${info.id}"
                           ${info.completed ? "checked" : ""}>
                    <span>Completed</span>
                </label>

                
                <button class="todo-edit bg-blue-500 text-white px-4 py-2 rounded 
                               hover:bg-blue-600 transition"
                        data-id="${info.id}">
                    ${info.editing ? "Save" : "Edit"}
                </button>

            </div>
        </div>
        
        `;
    });

    this.updatestats();
}

}
