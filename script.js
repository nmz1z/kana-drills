const buttons = document.getElementsByClassName("card-button");
// menu
let themeButton = document.getElementById("theme-button");
// card
var cardContainer = document.getElementById("card-container");
// front
let frontName = document.getElementById("front-name");
let answerField = document.getElementById("answer-field");
let frontButton = document.getElementById("front-button");
// back
let backName = document.getElementById("back-name");
let backImage = document.getElementById("back-image");
let backAnswer = document.getElementById("back-answer");
let anime = document.getElementById("anime");
let answerFeedback = document.getElementById("answer-feedback");
let backButton = document.getElementById("back-button");
// state
var isFlipping = false;
var currentCard;
var currentState;
//
var playerAnswer;

// functions: menu
function toggleTheme(){
    let currentTheme = document.documentElement.getAttribute("data-theme");
    if(currentTheme === "dark"){
        currentTheme = "light";
    } else{
        currentTheme = "dark";
    }
    document.documentElement.setAttribute("data-theme", currentTheme);
}
// functions: card
function flipCard(){
    document.getElementById("card-container").classList.toggle("flip");
}
function getNewCard(){
    let index = Math.floor(Math.random() * dataArray.length);
    currentCard = dataArray[index];
    frontName.textContent = currentCard.katakana;
    backName.textContent = currentCard.katakana;
    backAnswer.textContent = currentCard.romaji;
    anime.textContent = currentCard.anime;
    backImage.src = currentCard.img;
    currentState = 'front';

}
function checkAnswer(){
    if(!isFlipping){
        isFlipping = true;
        let answer = answerField.value;
        if(answer.toUpperCase() === currentCard.romaji.toUpperCase()){
            answerFeedback.style.color = "green";
            answerFeedback.textContent = "CORRECT";

        }else {
            answerFeedback.style.color = "red";
            answerFeedback.textContent = "WRONG";
        }
        flipCard();
        currentState = 'back';
        setTimeout(() => {answerField.value = "";}, 700); // clear answer field after animation
        setTimeout(() => {isFlipping = false}, 850);
    } else {}
}
function getNextCard()
{
    if(!isFlipping){
        isFlipping = true;
        flipCard();
        setTimeout(() => {backImage.src = ""}, 200); // preventive step: not to show back image before flip
        setTimeout(getNewCard, 300);
        setTimeout(() => {isFlipping = false}, 800);
    } else {}
}

// init
getNewCard();
answerField.select();
frontButton.addEventListener("click", checkAnswer);
window.addEventListener("keypress", (e) => {
    if(e.key === 'Enter'){
        if(currentState === 'front'){
            checkAnswer();
        }
        else{
            getNextCard();
            answerField.select();
        }
    }
});
backButton.addEventListener("click", getNextCard);
themeButton.addEventListener("click", toggleTheme)
