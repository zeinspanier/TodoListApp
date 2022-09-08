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
        item.setId(this.listId+"-"+task+ this.uniqueID().toString())
        this.tasks.push(item);
        displayList('add', item, this.listId, this.sectionId)
    }

    /**
    * This method removes a task to the tasks list
    * 
    * @param {*} item String
    * @returns None
    */
    removeTask(task){ 
        if (task == '') return;
        var index = this.findItemByName(task);
        if( index > -1){
            displayList('remove', this.tasks[index], this.listId)
            this.tasks.splice(index,1);
        }
        
        
    }
    
   /**
     * This method crosses off an item from the todolist
     * @param {*} item String
     * @returns None
     */
    toggleCrossOffItem(task){
        if (task == '') return;
        var index = this.findItemById(task);
        this.tasks[index].toggleCrossOff()
        displayList('strike', this.tasks[index], this.listId);
        return this.tasks[index].getCrossOff()
    }

    /**
     * This method finds an item in the tasks list
     * 
     * @param {*} item 
     * @returns index of item, or -1 if not found
     */
    findItemByName(item){
        if (item == '') return;
        for (let i = 0; i < this.tasks.length; ++i){
            if (this.tasks[i].getName() == item){
                return i;
            }
        }
        return -1;
    }
    /**
     * Search for an item in the list by id
     * @param {*} item 
     * @returns 
     */
    findItemById(item){
        if (item == '') return;
        for (let i = 0; i < this.tasks.length; ++i){
            if (this.tasks[i].getId() == item){
                return i;
            }
        }
        return -1;
    }

    /**
     * Creates a unique number to add to an id. Used to identify duplicates
     * @param {*} taskName 
     * @returns 
     */
    uniqueID(taskName){
        var randomNum = Math.floor(Math.random() * 11);
        while( this.findItemById(taskName + randomNum.toString()) != -1){
            randomNum = Math.floor(Math.random() * 11);
        }
        return randomNum;
    }
  
  
}