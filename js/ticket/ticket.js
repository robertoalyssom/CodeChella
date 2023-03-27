const $name = document.getElementById('name');
const $type = document.getElementById('type');
// const $section = document.getElementById('section');

// write data in the card
function writeCard() {
    // take ticket's data from localStorage
    let localStorageData = JSON.parse(localStorage.ticket);
    
    $name.innerText = localStorageData.name;
    $type.innerText = localStorageData.type;
};

writeCard();
