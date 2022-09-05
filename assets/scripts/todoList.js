/**
 * This class contains a list of todoItems
 * This class contins methods addTask,removeTask, updateListDisplay, crossOffItem
 * to edit the list
 */
class todoList{

    constructor(sectionId, listId){
        this.sectionId = sectionId
        this.listId = listId;
        this.tasks = [];
        
    }
    

    /**
    * This method adds a task to the tasks list
    * 
    * @param {*} item String
    * @returns None
    */
    addTask(task){ 
        if (task == '') return;
        var item = new todoItem(task);
        this.tasks.push(item);
        this.displayList()
    }

    /**
    * This method removes a task to the tasks list
    * 
    * @param {*} item String
    * @returns None
    */
    removeTask(task){ 
        if (task == '') return;
        var index = this.findItem(task);

        if( index > -1){
            this.tasks.splice(index,1);
        }
        this.displayList()
        
    }
    
   /**
     * This method crosses off an item from the todolist
     * @param {*} item String
     * @returns None
     */
    toggleCrossOffItem(task){
        if (task == '') return;
        var index = this.findItem(task);
        this.tasks[index].toggleCrossOff()
        this.displayList();
        return this.tasks[index].getCrossOff()
    }

    /**
     * This method finds an item in the tasks list
     * 
     * @param {*} item 
     * @returns index of item, or -1 if not found
     */
    findItem(item){
        if (item == '') return;
        for (let i = 0; i < this.tasks.length; ++i){
            if (this.tasks[i].getName() == item){
                return i;
            }
        }
        return -1;
    }

    /**
    * This method displays a list of items under a tag.
    * It can does not display items repeatadly
    * it removes items that are not in the list
    * 
    *  @param {*,*} item to add, remove, or update crossoff
    * @returns None
    */
    displayList(){
        document.getElementById(this.listId).innerHTML = "";
        let list = document.getElementById(this.listId);

        //Display List
        if (this.tasks.length > 0){
            list.style.display = "block";
        }
        else{
            list.style.display = "none";
        }

        // Add all items to the list
        for (let i = 0; i < this.tasks.length; ++i){
            let li = document.createElement("li");
            li.setAttribute("id", this.listId+"-"+this.tasks[i].getName())
            li.setAttribute("for", this.sectionId);
            let isCrossOff = this.tasks[i].getCrossOff();
            li.setAttribute("crossoff", isCrossOff);

            if ( isCrossOff != ""){
                li.appendChild(this.tasks[i].getStrikeName());
            }
            else{
                li.innerText = this.tasks[i].getName();
            }

            list.appendChild(li);
       }
    }
  
  
}