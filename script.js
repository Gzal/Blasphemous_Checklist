createDocumentChecklists();

function createDocumentChecklists() {
    var documentDivElems = document.getElementsByTagName("DIV");

    for (var i = 0; i < documentDivElems.length; i++)
        if (documentDivElems[i].className == "checklist")
            createChecklist(documentDivElems[i]);

    loadChecklistState();
}

function createChecklist(divElem) {
    var divChildElem = divElem.firstChild;

    do {
        if(divChildElem.tagName == "LABEL") {
            insertCheckboxFor(divChildElem);
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
            localStorage.setItem(i,inputElems[i].checked);
}

function loadChecklistState() {
    var inputElems = document.getElementsByTagName("INPUT");

    for (var i = 0; i < inputElems.length; i++) {
        if (inputElems[i].getAttribute("type") == "checkbox")
            if (localStorage.getItem(i) == "true")
                inputElems[i].checked = true;
    }
}
