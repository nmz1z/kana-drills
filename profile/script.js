// theme toggle
let themeButton = document.getElementById("theme-button");

function toggleTheme(){
    let currentTheme = document.documentElement.getAttribute("data-theme");
    if(currentTheme === "dark"){
        currentTheme = "light";
    } else{
        currentTheme = "dark";
    }
    document.documentElement.setAttribute("data-theme", currentTheme);
}
themeButton.addEventListener("click", toggleTheme);
//// OBJECT
class customCard {
    constructor(id, rom, kat, hir, anime, img){
        this.id = id;
        this.romaji = rom;
        this.katakana = kat;
        this.hiragana = hir;
        this.anime = anime;
        this.img = img;
    }
}
//// VARIABLES
// local storage

// panel
let addButton = document.getElementById("add-button");
let cardList = document.querySelector('.card-list');
// modal
let modalMask = document.getElementById("modal-mask");
let modalWindow = document.getElementById("modal-content");

let modalAddButton = document.getElementById("modal-add-button");
let xButton = document.getElementById("modal-x");
let nameInput = document.getElementById("name-input");
let katakanaInput = document.getElementById("katakana-input");
let hiraganaInput = document.getElementById("hiragana-input");
let animeInput = document.getElementById("anime-input");
let imgInput = document.getElementById("image-input");
//// METHODS
function toggleModal(){
    // if(mode === 'edit'){
    //     modalAddButton.textContent = 'Save Changes';
    // }else{
    //     modalAddButton.textContent = 'Add Card';
    // }
    modalMask.classList.toggle('visible');
    modalWindow.classList.toggle('visible');
    resetInputs();

function resetInputs(){
    nameInput.value = '';
    katakanaInput.value = '';
    hiraganaInput.value  = '';
    animeInput.value  = '';
    imgInput.value  = '';
}
}

function createCard(){
    // create DOM element
    const element = document.createElement('div');
    element.classList.add('list-item')
    // get values
    const id = new Date().getTime().toString();
    const name = nameInput.value;
    const kat = katakanaInput.value;
    const hir = hiraganaInput.value;
    const anime = animeInput.value;
    const img = imgInput.value;
    // create card object
    const newCard = new customCard(id, name, kat, hir, anime, img);
    // setup element
    element.innerHTML = `
        <p class="item-name">${name}</p>
        <div class="item-icons">
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
    `
    element.id = id;
    // add eventListeners to edit/del buttons
    const edit = element.querySelector('.fa-pen-to-square');
    edit.addEventListener('click', openEditMenu);
    const del = element.querySelector('.fa-trash');
    del.addEventListener('click', deleteItem);

    // append to List
    cardList.append(element);

    // add to localStorage
    addToStorage(newCard);

    toggleModal();
}
function askDelete(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.id;

    // open delete confirmation
    // button.value = id;
    // deleteItem(id, element)
}

let currentElement;
function deleteItem(e){
    // currentElement = e.target.parentElement.parentElement
    // currentElementId = e.target.parentElement.parentElement.id
    // currentElement = e.currentTarget.parentElement.parentElement;
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.id;
    // delete element
    cardList.removeChild(element);
    removeFromStorage(id);
    // search list (id)
        // delete object{id}


};

function openEditMenu(e){
    // let element = e.target.parentElement.parentElement
    // let id = e.target.parentElement.parentElement.id

    // search list (id)
        // get reference to object{id}

    // make UI visible(object{id})


}
function askEdit(before, after){
    //

    // editItem(id, after)
}

function editItem(id){
    // get new inputs

    // save new inputs
}

function additem(){

}

// storage
function getStorage(){
    if(localStorage.getItem('customDeck')){
        return JSON.parse(localStorage.getItem('customDeck'));
    }else{
        return [];
    }

}
function addToStorage(object){
    let deck = getStorage();
    deck.push(object);
    localStorage.setItem('customDeck', JSON.stringify(deck));
}

function removeFromStorage(id){
    let deck = getStorage();
    deck = deck.filter(function (item) {
        if (item.id !== id) {
          return item;
        }
      });
      localStorage.setItem('customDeck', JSON.stringify(deck));
}
function setUpList(){
    let deck = getStorage();
    if(deck.length > 0)
    {
        deck.forEach(function (item) {
            createListItem(item);
            console.log('oi')
          });
    }
}
function createListItem(object){
    const element = document.createElement('div');
    element.classList.add('list-item');

    element.innerHTML = `
        <p class="item-name">${object.romaji}</p>
        <div class="item-icons">
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
    `
    element.id = object.id;

    const edit = element.querySelector('.fa-pen-to-square');
    edit.addEventListener('click', openEditMenu);
    const del = element.querySelector('.fa-trash');
    del.addEventListener('click', deleteItem);

    cardList.append(element);
}


//// INIT
addButton.addEventListener('click', toggleModal);
xButton.addEventListener('click', toggleModal);

modalAddButton.addEventListener('click', createCard)
// window.addEventListener('onload', setUpList)
setUpList();
// local storage
/*
    getLocalStorage

    deleteFromLocal
*/
