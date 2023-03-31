import validateName from "./validate-name.js";
import validateEmail from "./validate-email.js";
import notOfLegalAge from "./validate-date.js";

// Blur event
const $fields = document.querySelectorAll('[data-field]');

$fields.forEach(field => {
    field.addEventListener("blur", event => verifyField(event.target));
    field.addEventListener("invalid", event => event.preventDefault()); // it blocks the standart pop-ups 
});

// Error messages
const errorTypes = [
    "patternMismatch",
    "tooShort",
    "typeMismatch",
    "valueMissing",
    "customError"
];

const messages = {
    name: {
        valueMissing: "Por favor, preencha o campo.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido.",
        customError: "Por favor, preencha o campo com o nome completo, ok?"
    },
    email: {
        patternMismatch: "Por favor, preencha um email válido.",
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    date: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Atenção: a compra de ingressos é restrita a maiores de 18 anos.'
    }
};

// check fields
function verifyField(field) {
    let errorMessage = "";
    
    field.setCustomValidity("");

    // set Custom Validities
    if (field.name == "name" && field.value >= "4") {
        validateName(field);
    };
    if (field.name == "date") {
        notOfLegalAge(field);
    };
    
    // check validityState
    errorTypes.forEach( error => {
        if (field.validity[error]) { // when field.validity get some error like cosnt errorTypes (true)
            errorMessage = messages[field.name][error]; // accessing error messages in cosnt messages
            writeErrorMessage(field, errorMessage);
        }
        else if (field.validity.valid) {
            deleteErrorMessage(field.parentNode);
        };
    });
    console.log(field.validity);
};

// validate and write error message
function writeErrorMessage(field, errorMessage) {
    let imputValidator = field.checkValidity();
    let $span = field.parentNode.querySelector('#span');
    
    if (!imputValidator) {
        $span.textContent = errorMessage;
    };
};

// delete error message
function deleteErrorMessage(fieldsetElement) {
    let $span = fieldsetElement.children[2]; // span

    $span.innerText = "";
};

// Submit event add datas in localStorage
const $form = document.querySelector('[data-form]');

$form.addEventListener("submit", event => {
    event.preventDefault();
    storeData(event);

    window.location.href = "./ingresso-comprado-page.html";
});

function storeData(event) {
    let formDatas = {
        "name": event.target.name.value,
        "email": event.target.email.value,
        "type": event.target.select.value,
        "dateOfBirth": event.target.date.value
    };

    localStorage.setItem("ticket", JSON.stringify(formDatas));
};
