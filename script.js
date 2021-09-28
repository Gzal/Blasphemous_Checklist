createDocumentChecklists();

function createDocumentChecklists() {
    var documentDivElems = document.getElementsByTagName("DIV");

    for (var i = 0; i < documentDivElems.length; i++)
        if (documentDivElems[i].className == "checklist")
            createChecklist(documentDivElems[i]);

    loadChecklistState();
}

function createChecklist(divElem) {
    var itemNumber = 0;
    var divChildElem = divElem.firstChild;

    do {
        if(divChildElem.tagName == "LABEL") {
            itemNumber++;
            insertCheckboxFor(divChildElem);
            addCheckboxId(divChildElem, itemNumber);
            addForAttribute(divChildElem);
            appendBreakTo(divChildElem);
        }
        divChildElem = divChildElem.nextSibling;
    } while (divChildElem.nextSibling != null);
}

function insertCheckboxFor(labelElem) {
    var inputElem = document.createElement("INPUT");
    inputElem.setAttribute("type", "checkbox");
    labelElem.parentNode.insertBefore(inputElem, labelElem);
}

function addCheckboxId(labelElem, itemNumber) {
    var areaName = labelElem.parentNode.id;
    var checkboxId = areaName + "-" + itemNumber;
    labelElem.previousSibling.id = checkboxId;
}

function addForAttribute(labelElem) {
    var checkboxElem = labelElem.previousSibling;
    labelElem.setAttribute("for", checkboxElem.id);
}

function appendBreakTo(labelElem) {
    var breakElem = document.createElement("BR");

    if (labelElem.nextSibling != null)
        labelElem.parentNode.insertBefore(breakElem, labelElem.nextSibling);
    else
        labelElem.parentNode.appendChild(breakElem);
}

function saveChecklistState() {
    var inputElems = document.getElementsByTagName("INPUT");

    for (var i = 0; i < inputElems.length; i++)
        if (inputElems[i].getAttribute("type") == "checkbox")
            localStorage.setItem(inputElems[i].id,inputElems[i].checked);
}

function loadChecklistState() {
    var inputElems = document.getElementsByTagName("INPUT");

    for (var i = 0; i < inputElems.length; i++) {
        if (inputElems[i].getAttribute("type") == "checkbox") {
            if (localStorage.getItem(inputElems[i].id) == "true")
                inputElems[i].checked = true;
            else
                inputElems[i].checked = false;
        }
    }
}
