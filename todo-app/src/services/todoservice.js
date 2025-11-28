class Service{
    constructor(){
        this.todos=JSON.parse(localStorage.getItem('todos')) || [];
    }

    savelocalstorage(){
        localStorage.setItem('todos',JSON.stringify(this.todos));
        console.log(localStorage.setItem('todos',JSON.stringify(this.todos)))
    }
    searchtodo(name){
        const name1=name.toLowerCase();
        this.savelocalstorage();
        return this.todos.filter((t)=>t.name.toLowerCase().includes(name1));
    }
    deletetodo(id){
        if(id){
            this.todos=this.todos.filter((t)=>t.id !== id)
            this.savelocalstorage();
        }
    }
    updatetodo(id,name,description){
      this.todos.forEach((t)=>{
          if(t.id===id){
              t.name=name;
              t.description=description;
          }
      })
      this.savelocalstorage();
    }

    addtodo(todo){
      if (todo){
        this.todos.push(todo);
        this.savelocalstorage();
      }
    }
    getalltodos(){
        return this.todos;
    }
    markcompleted(id,completed){
        this.todos.forEach((t)=>{
            if(t.id===id){
                t.completed=completed;
            }
        })
        this.savelocalstorage();
    }
    updatetodo(id,name,description){
        console.log(id,name,description);
        this.todos.forEach((t)=>{
            if(t.id===id){
                t.name=name;
                t.description=description;
            }
        })
        this.savelocalstorage();
        
    }
   
}