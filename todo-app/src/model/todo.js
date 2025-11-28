class todostructure{
    constructor(name,description){
        this.id= Math.floor(Math.random()*10000)
        this.name=name;
        this.description=description;
        this.completed=false;
        this.editing=false; 
    }
    getdetails(){
        return{
            id:this.id,
            name:this.name,
            description:this.description
        }
    }


}

