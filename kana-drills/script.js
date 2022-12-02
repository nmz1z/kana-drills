const buttons = document.getElementsByClassName("card-button");

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

var playerAnswer;
var currentCard;

function flipCard(){
    document.getElementById("card-container").classList.toggle("flip");
}


function checkAnswer(){
    backName.textContent = currentCard.katakana;
    backImage.src = currentCard.img;
    backAnswer.textContent = currentCard.romaji;
    anime.textContent = currentCard.anime;
    //
    let answer = answerField.value;
    if(answer.toUpperCase() === currentCard.romaji.toUpperCase()){
        answerFeedback.style.color = "green";
        answerFeedback.textContent = "CORRECT";
  
    }else {
        answerFeedback.style.color = "red";
        answerFeedback.textContent = "WRONG";
    }
    flipCard();
    setTimeout(() => {answerField.value = "";}, 500);
}

function getNewCard(){
    let index = Math.floor(Math.random() * dataArray.length);
    currentCard = dataArray[index];
    frontName.textContent = currentCard.katakana;
    flipCard();
}

getNewCard();
frontButton.addEventListener("click", checkAnswer);
backButton.addEventListener("click", getNewCard);
