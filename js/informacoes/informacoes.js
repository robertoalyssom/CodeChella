const $questions = document.querySelectorAll('[data-question]');

$questions.forEach(question => clickEvent(question));

function clickEvent(question) {
    question.addEventListener("click", event => {
        event.preventDefault();
        showHideAnswer(question);
        rotateIcon(question);
    });
};

function showHideAnswer(question) {
    let answerBlock = question.parentNode.childNodes[3]; // div

    if (answerBlock.style.display == "block") {
        answerBlock.style.display = "none";
    } else {
        answerBlock.style.display = "block";
    };
};

function rotateIcon(question) {
    let $icon = question.firstElementChild;

    $icon.classList.toggle("icon-rotate");
};