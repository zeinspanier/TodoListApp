/**
    * This method displays a list of items under a tag.
    * It can does not display items repeatadly
    * it removes items that are not in the list
    * 
    *  @param {*,*} item to add, remove, or update crossoff
    * @returns None
    */
 function displayList(operation, listItem, listId, sectionId){

    let list = document.getElementById(listId);
    switch(operation){
        case 'add':
            let li = createListItem(listItem.getName(), listItem.getId(), listItem.getCrossOff(), sectionId, listId)
            addToList(list, li);
            break;
        case'remove':
            removeFromList(list, listItem)
            break;
        case 'strike':
            strikeItem(list, listItem)
            break;
    }

    //Display List
    if (list.children.length > 0){
        list.style.display = "block";
    }
    else{
        list.style.display = "none";
    }

  
}
/**
 * This creates a list item
 * 
 * 
 * @param {*} taskName Display text
 * @param {*} taskId  
 * @param {*} isCrossOff true if item is crossee off, false otherwise
 * @param {*} sectionId  
 * @param {*} listId 
 * @returns 
 */
function createListItem(taskName, taskId, isCrossOff, sectionId, listId){
    var li = document.createElement("li")
    li.setAttribute("id", taskId)
    li.setAttribute("for", sectionId);
    li.setAttribute("crossoff", isCrossOff);
    li.setAttribute('onclick', 'crossOffItem(\''+ taskId +'\', \''+sectionId+'\')')
    li.innerText = taskName;
    return li
}
/**
 * adds a list item to the list
 * 
 * @param {*} list 
 * @param {*} li 
 */
function addToList(list, li){
    list.appendChild(li);
}
/**
 * Removes a list itme from the list
 * @param {*} list 
 * @param {*} listItem 
 */
function removeFromList(list, listItem){
    listChildren = list.children;
    for(i = 0; i <listChildren.length; ++i){
        if (listChildren[i].getAttribute("id") == listItem.getId()){
            list.removeChild(listChildren[i])
        }
}
}
/**
 * crosses a list itme off or un-crossoff an item
 * 
 * @param {*} list 
 * @param {*} listItem 
 */
function strikeItem(list, listItem){

    listChildren = list.children;
    for(i = 0; i <listChildren.length; ++i){
        if (listChildren[i].getAttribute("id") == listItem.getId()){

            // if name is crossed off, un cross it off
            if (listItem.getCrossOff()){
                listChildren[i].innerText = ""
                listChildren[i].appendChild(listItem.getStrikeName());
            }
            else{
                listChildren[i].innerText = listItem.getName()
            }
        }
    }
}
