createDocumentChecklists();

function createDocumentChecklists() {
    var documentDivs = document.getElementsByTagName("DIV");
    for (var i = 0; i < documentDivs.length; i++)
        if (documentDivs[i].className == "checklist")
            createDivChecklist(documentDivs[i]);
}

function createDivChecklist(div) {
    var checklistLabels = div.getElementsByTagName("LABEL");
    var label;

    for (var i = 0; i < checklistLabels.length; i++) {
        label = checklistLabels[i];
        insertCheckBox(label);
        insertBreak(label);
    }
}

function insertCheckBox(label) {
    var input = document.createElement("INPUT");
    input.setAttribute("type", "checkbox");
    label.parentNode.insertBefore(input, label); 
}

function insertBreak(label) {
    var breakElem = document.createElement("BR");

    if (label.nextSibling != null)
        label.parentNode.insertBefore(breakElem, label.nextSibling);
    else
        label.parentNode.appendChild(breakElem);
}
