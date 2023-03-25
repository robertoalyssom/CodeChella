const $questions = document.querySelectorAll('[data-question]');

$questions.forEach(question => clickEvent(question));

function clickEvent(question) {
    question.addEventListener("click", event => {
        event.preventDefault();
        showHideAnswer(question);
    });
};

function showHideAnswer(question) {
    let answerBlock = question.parentNode.childNodes[3]; // div

    if(answerBlock.style.display == "block") {
        answerBlock.style.display = "none";
    } else {
        answerBlock.style.display = "block";
    };
};