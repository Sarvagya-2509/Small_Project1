let random=parseInt(Math.random()*100+1);
const submit=document.querySelector('#sub')
const user=document.querySelector('#guessfield')
const  guessslot=document.querySelector('.results')
const remaining=document.querySelector('.last')
const status=document.querySelector('.low')
const startover=document.querySelector('.result')

const p=document.createElement('p')

let prev=[];
let numGuess=1;

let play=true;
if(play){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const g=parseInt(user.value)
        console.log(g);
        validate(g)
    });
}
function validate(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1 || guess>100){
        alert('Please enter a number between 1 to 100')
    }
    else{
        prev.push(guess);
        if(numGuess===11){
            disp(guess)
            dispmessage(`Game Over, Random number was ${random}`)
            endgame()
        }
        else{
         disp(guess)
         check(guess)   
        }
    }
    }
function check(guess){
    if(guess === random){
        dispmessage(`You guessed it right`);
        endgame();
    }
    else if(guess < random){
        dispmessage(`Number is TOO low`);
    }
    else{
        dispmessage(`Number is TOO high`);
    }
}
function disp(guess){
user.value=''
guessslot.innerHTML+=`${guess}  `;
remaining.innerHTML=`${11-numGuess}`;
numGuess++;
}
function dispmessage(message){
status.innerHTML=`<h2>${message}</h2>`
}
function endgame(){
    user.value=''
    user.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame">Start new Game</h2>`
    startover.appendChild(p)
    play=false;
    newgame()
}
function newgame(){
    const t=document.querySelector('#newgame')
    t.addEventListener('click',function(){
        random=parseInt(Math.random()*100+1);
        prev=[];
        numGuess=1;
        guessslot.innerHTML='';
        remaining.innerHTML=`${11-numGuess} `;
        user.removeAttribute('disabled');
        startover.removeChild(p);
        play=true;   
    })
}
