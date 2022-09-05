
/*
    This function and its helpers create an HTML section for a todo list
**/
function createList(listName, mapOfLists){
    var bodyElm = document.getElementsByTagName("body").item(0);
    var sectionId = listName+"-todoList";

    if(mapOfLists.get(sectionId) != undefined){
        return[null, null];
    }

    listSection = createSection(sectionId)
    title = createTitle(listName)
    inputBox = createInput()
    buttons = createButtons(sectionId)
    list = makeList(sectionId)

    
    listSection.appendChild(title)
    listSection.appendChild(inputBox)
    listSection.appendChild(buttons)
    listSection.appendChild(list)
    
    bodyElm.appendChild(listSection);
    
    return [sectionId, sectionId+"-items"];
}

function createSection(sectionId){
    var listSection = document.createElement("SECTION");
    listSection.setAttribute("id",sectionId)
    return listSection
}
function createTitle(listName){
    var title = document.createElement('h2')
    title.innerText = listName
    return title;
}
function createInput(){
    var inputBox = document.createElement("INPUT")
    inputBox.setAttribute("type", "text")
    return inputBox
    
}
function createButtons(sectionId){
    var buttons = document.createElement("ul");

    var add = document.createElement("button");
    add.setAttribute("id", sectionId+"-add");
    add.setAttribute("type", "add");
    add.setAttribute("for", sectionId)
    add.innerText = "Add";

    var remove = document.createElement("button");
    remove.setAttribute("id", sectionId+"-remove");
    remove.setAttribute("type", "remove")
    remove.setAttribute("for", sectionId)
    remove.innerText = "Remove";

    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", sectionId+"-deleteBtn");
    deleteBtn.setAttribute("type", "delete")
    deleteBtn.setAttribute("for", sectionId)
    deleteBtn.innerText = "Delete";


    buttons.appendChild(add);
    buttons.appendChild(remove);
    buttons.appendChild(deleteBtn);

    return buttons;
}
function makeList(sectionId){
    var list = document.createElement("li");
    var listID = sectionId+"-items"

    list.setAttribute("id", listID);
    list.setAttribute("for", sectionId)
    
    list.style.display = "none";

    return list;
}

