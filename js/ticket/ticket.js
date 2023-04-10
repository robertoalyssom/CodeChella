const $name = document.getElementById('name');
const $type = document.getElementById('type');
const $section = document.getElementById('section');
const $date = document.getElementById('date');

// write data in the card
function writeCard() {
    // take ticket's data from localStorage
    let localStorageData = JSON.parse(localStorage.ticket);
    
    $name.innerText = localStorageData.name;
    $type.innerText = localStorageData.type;
    $section.innerText = localStorageData.section;
    $date.innerText = `Data: ${localStorageData.showDate}`;
};

writeCard();