let player={
    name:"Dhinesh",
    chips:195
}
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.querySelector("#card-el")
let playerEL=document.getElementById("player-el")

playerEL.textContent=player.name+": $ "+player.chips





 


function getRandomCard(){
  let randomnumber=  Math.floor(Math.random()*13)+1
  if(randomnumber>10){
      return 10
  }
  else if(randomnumber === 1){
      return 11
  }
  else{
      return randomnumber
  }
}
function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard

    renderGame()
}

function renderGame()
{  
    cardEl.textContent="Cards: "
    for (let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum: "+sum
    if(sum<=20){
    message="Do you wanna draw a new card?"
    
}
else if(sum===21){
    message="wohoo! you've got BlackJack"
    hasBlackJack=true
}
else{
    message="you're out of the game!"
    isAlive=false
}
messageEl.textContent=message
}
function newCard(){
    if(isAlive===true && hasBlackJack===false){

    let card=getRandomCard()
    sum +=card
    cards.push(card)
    renderGame()
}
}

