createDocumentChecklists();

function createDocumentChecklists() {
    var documentDivElems = document.getElementsByTagName("DIV");

    for (var i = 0; i < documentDivElems.length; i++)
        if (documentDivElems[i].className == "checklist")
            createChecklist(documentDivElems[i]);
}

function createChecklist(divElem) {
    var labelElems = divElem.getElementsByTagName("LABEL");

    for (var i = 0; i < labelElems.length; i++) {
        insertCheckboxFor(labelElems[i]);
        appendBreakTo(labelElems[i]);
    }
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
