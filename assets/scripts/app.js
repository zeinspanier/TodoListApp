
window.onload=function(){
let mapOfLists = new Map();

document.addEventListener('click', function(event){
    
    if(event.target.tagName == 'STRIKE'){
        var id = event.target.parentNode.id;
    }else{
        var id = event.target.id;
    }

    if (!id) return;

    // Create a List
    if (id == 'createList'){
        createToDoList(mapOfLists);
        return;
    }


    // Get the element
    let elem = document.getElementById(id);
    let list = elem.getAttribute("for");
    if(!list) return;
    //Get the list 
    listToProcess = mapOfLists.get(list)
    var section = document.getElementById(list);
    if(!listToProcess) return
    
    //toggle cross off
    if(elem.hasAttribute("crossoff")){
        //Check if strike
        if(elem.innerHTML == 'STRIKE'){
            crossOffItem(elem.innerHTML.innerText, listToProcess)
        }
        else{
            crossOffItem(elem.innerText, listToProcess)
        }
        return;
    }
    
    // get text box
    var textItem = section.getElementsByTagName("input").item(0).value;
    if(!textItem) return;

    //Process action
    switch(elem.getAttribute("type")){
        case "add":
            listToProcess.addTask(textItem);
            break;
        case "remove":
            listToProcess.removeTask(textItem);
            break;
        case "delete":
            section.remove();
            break;
    }
})
}

function crossOffItem(itemName, listToProcess){
    var crossOff = listToProcess.toggleCrossOffItem(itemName);
    return crossOff
}

function createToDoList(mapOfLists){

    let listName = prompt("Please a Name for your List:", "Groceries");
    if (listName == null || listName ==""){
        return;
    }
    else{
        var ids = createList(listName, mapOfLists);
        var sectionId = ids[0], listId = ids[1];
        // filter out duplicates
        if (sectionId != null){
            mapOfLists.set(sectionId, new todoList(sectionId, listId))
        }

        return;
    }
}







    



