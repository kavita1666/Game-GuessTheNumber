

const randomNumber= document.querySelector('.random-number');
const guessNumber=document.querySelector('.guess-number');
const checkNumberBtn=document.querySelector('.ckeck-no');
const playAgainBtn= document.querySelector('.play-again');
const message= document.querySelector('.message');
const score= document.querySelector('.score');
const highscore= document.querySelector('.highscore');

let number=Math.trunc(Math.random() *20)+1;     //generate random no
let scoreCount=20;      
let highestScore=0;

// check button clicked
checkNumberBtn.addEventListener('click', function (){
    let guess= Number(guessNumber.value);

    if(!guess)
    {
        message.textContent="Please Enter value..";
    }
    else{
        if(guess===number)
        {
            message.textContent="Correct!";
            document.querySelector('body').style.backgroundColor= '#60b347';
            randomNumber.textContent=number;

            if(score > highestScore)
            {
                highestScore=score;
                highscore.textContent= highestScore;
            }
            
        }
        else if(guess<number)
        {
            if(scoreCount>1){
                message.textContent="Too Low!";
                --scoreCount;
                score.textContent= scoreCount;
            }
            else{
                message.textContent="Game Over!";
                score.textContent=0;
            }
            
        }
        else
        {
            if(scoreCount>1){
                message.textContent="Too High!";
                --scoreCount;
                score.textContent= scoreCount;
            }
            else{
                message.textContent="Game Over!";
                score.textContent=0;
            }
        }
    }
});

//play again
playAgainBtn.addEventListener('click', function (){

    scoreCount=20;
    number=Math.trunc(Math.random() *20)+1;
    randomNumber.textContent='?';
    guessNumber.value='';
    message.textContent="Please Enter value..";
    score.textContent=20;
    document.querySelector('body').style.backgroundColor= 'white';
});
