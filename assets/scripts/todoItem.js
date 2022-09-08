/**
 * This class is a todo list item
 */
class todoItem{
    constructor(task){
        this.taskName = task;// name of task
        this.id = ""
        this.strikeName = "" // name if crossed off list
        this.crossOff = false; // if name is crossed off
    }
    getName(){
        return this.taskName;
    }
    getId(){
        return this.id;
    }
    getCrossOff(){
        return this.crossOff;
    }
    getStrikeName(){
        return this.strikeName;
    }
    setId(id){
        this.id = id;
    }
    
    /**
    * Returns name of this item with letters crossed out
    */
    toggleCrossOff(){
        if(this.crossOff){
            this.strikeName = ""
            this.crossOff = false
        }
        else{
            var strike = document.createElement("strike");
            strike.innerText = this.taskName
            this.strikeName = strike
            this.crossOff = true
        }
    }
}