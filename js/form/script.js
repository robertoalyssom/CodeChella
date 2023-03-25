 import validateName from "./validate-name.js";
import validateEmail from "./validate-email.js";
import notOfLegalAge from "./validate-date.js";

// Blur event
const $fields = document.querySelectorAll('[data-field]');

$fields.forEach(field => {
    field.addEventListener("blur", event => validateField(event.target));
});

// Validate fields
function validateField(field) {
    let fieldsetElement = field.parentNode; // DOM node fieldset
    let fieldData = field.value; // user data

    if (field.name == "name" && validateName(fieldData)) {
        writeErrorMessage(fieldsetElement, validateName(fieldData));
    }
    else if (field.name == "email" && validateEmail(fieldData)) {
        writeErrorMessage(fieldsetElement, validateEmail(fieldData));
    }
    else if (field.name == "date" && notOfLegalAge(fieldData)) {
        writeErrorMessage(fieldsetElement, notOfLegalAge(fieldData));
    }
    else if (fieldsetElement.childElementCount == "3") { // third filedset element's child
        deleteErrorMessage(fieldsetElement);
    };
};

// Write error message
function writeErrorMessage(fieldsetElement, errorMessage) {
    let numberOfChildrenInFieldset = fieldsetElement.childElementCount;
    
    if (numberOfChildrenInFieldset == "2") {
        let newParagraph = document.createElement("span"); // create span
        
        newParagraph.classList.add("form-error");
        
        newParagraph.textContent = errorMessage;
        fieldsetElement.appendChild(newParagraph);
    };
};

// Delete error message
function deleteErrorMessage(fieldsetElement) {
    let paragraph = fieldsetElement.children[2]; // span
    
    fieldsetElement.removeChild(paragraph);
};

// Store datas in the localStorage and submit it
const $form = document.querySelector('[data-form]');
const $submitButton = document.querySelector('[data-button]');

$form.addEventListener("submit", event => {
    event.preventDefault();
    storeData(event);
});


function storeData(event) {
    let formDatas = {
        "name": event.target.name.value,
        "email": event.target.email.value,
        "ticketType": event.target.select.value,
        "dateOfBirth": event.target.date.value
    }

    localStorage.setItem("ticket", JSON.stringify(formDatas));
};

// function {

// }

// console.dir(field.validity);