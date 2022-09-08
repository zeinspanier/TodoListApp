
/**
 * This function and its helpers create an HTML section for a todo list
 * The Attributes ID and For are important for each element. 
 * id: uniquley itentifies each element
 * For: the section each element is for. Always the SectionId
 * 
 * @param {*} listName Name used to create section 
 * @param {*} mapOfLists Map of all lists in the DOM
 * @returns List of SectionId and ListId
 */
function createList(listName, mapOfLists){
    var bodyElm = document.getElementsByTagName("body").item(0);
    var sectionId = listName+"-todoList";

    // If sectionId if found return null
    if(mapOfLists.get(sectionId) != undefined){
        return[null, null];
    }
    //Create all parts
    listSection = createSection(sectionId)
    title = createTitle(listName)
    inputBox = createInput()
    buttons = createButtons(sectionId)
    list = makeList(sectionId)

    //Append parts to section
    listSection.appendChild(title)
    listSection.appendChild(inputBox)
    listSection.appendChild(buttons)
    listSection.appendChild(list)
    //Append to body
    bodyElm.appendChild(listSection);
    
    // SectionId and ListId
    return [sectionId, sectionId+"-items"];
}
/**
 * This crates the section with the sectionId
 * 
 * @param {*} sectionId id for section
 * @returns 
 */
function createSection(sectionId){
    var listSection = document.createElement("SECTION");
    listSection.setAttribute("id",sectionId)
    return listSection
}
/**
 * Creates List Title in <h2> tag
 * 
 * @param {*} listName Name of list
 * @returns 
 */
function createTitle(listName){
    var title = document.createElement('h2')
    title.innerText = listName
    return title;
}
/**
 * Creates a text input box to add and remove items
 * 
 * @returns 
 */
function createInput(){
    var inputBox = document.createElement("INPUT")
    inputBox.setAttribute("type", "text")
    return inputBox
    
}
/**
 * This creates the button: Add, Remove, and Delete
 * 
 * @param {*} sectionId 
 * @returns 
 */
function createButtons(sectionId){
    var buttons = document.createElement("ul");

    //Add
    var add = document.createElement("button");
    add.setAttribute("id", sectionId+"-add");
    add.setAttribute("type", "add");
    add.setAttribute("for", sectionId)
    add.innerText = "Add";
    //Remove
    var remove = document.createElement("button");
    remove.setAttribute("id", sectionId+"-remove");
    remove.setAttribute("type", "remove")
    remove.setAttribute("for", sectionId)
    remove.innerText = "Remove";
    //Delete
    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", sectionId+"-deleteBtn");
    deleteBtn.setAttribute("type", "delete")
    deleteBtn.setAttribute("for", sectionId)
    deleteBtn.innerText = "Delete";

    //append all
    buttons.appendChild(add);
    buttons.appendChild(remove);
    buttons.appendChild(deleteBtn);

    return buttons;
}
/**
 * This crates the list of Items. Initally sets the display to none
 * 
 * @param {*} sectionId 
 * @returns 
 */
function makeList(sectionId){
    var list = document.createElement("li");
    var listID = sectionId+"-items"

    list.setAttribute("id", listID);
    list.setAttribute("for", sectionId)

    // Set display
    list.style.display = "none";

    return list;
}

