let mapOfLists = new Map(); // Global variable to store lists


/**
 * This Function runs when the window loads. It has an event listener to process clicks.
 */
window.onload=function(){

/**
 * This event listener processes clicks for a specific list's: text box, add, remove, delete
 */
document.addEventListener('click', function(event){
    //let body = document.getElementsByTagName('body').item(0);
    //console.log(body)

    //Get Id
    let id = event.target.id;
    if (!id) return;
    
    // Get the element
    let elem = document.getElementById(id);
    // Get list name
    let list = elem.getAttribute("for");
    if(!list) return;

    //Find list in map
    listToProcess = mapOfLists.get(list)
    var section = document.getElementById(list);
    if(!listToProcess) return

    // Get text from text box
    var textItem = section.getElementsByTagName("input").item(0).value;
    // Set text box to empty
    section.getElementsByTagName("input").item(0).value = ""

    //Process action
    switch(elem.getAttribute("type")){
        case "add":
            if(!textItem) return;
            listToProcess.addTask(textItem);
            break;
        case "remove":
            if(!textItem) return;
            listToProcess.removeTask(textItem);
            break;
        case "delete":
            section.remove();
            mapOfLists.delete(list)
            break;
    }
})
}
/**
 * This method crosses an item off of the list
 * 
 * 
 * @param {*} itemId Id of item to cross off
 * @param {*} list List containing item
 * @returns 
 */
function crossOffItem(itemId, list){
    // Find list in map
    listToProcess = mapOfLists.get(list)
    var crossOff = listToProcess.toggleCrossOffItem(itemId);
    return crossOff
}
/**
 * This method creates a new todo list with a name.
 * @returns 
 */
function createToDoList(){
    //prompt User
    let listName = prompt("Please a Name for your List:", "Groceries");
    if (listName == null || listName ==""){
        return;
    }
    else{
        //CreateList HTML
        var ids = createList(listName, mapOfLists);
        var sectionId = ids[0], listId = ids[1];
        // Filter out duplicates and add to map
        if (sectionId != null){
            mapOfLists.set(sectionId, new todoList(sectionId, listId))
        }
        return;
    }
}









    



