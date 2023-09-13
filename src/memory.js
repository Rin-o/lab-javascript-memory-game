class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []; //cards the user has clicked so we can compare them.
    this.pairsClicked  = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
if(!this.cards) return undefined;

const shuffleCardArr = [];

while (this.cards.length>0){
  const randIndex = Math.floor(Math.random()*this.cards.length)
  const randCard = this.cards[randIndex];
  shuffleCardArr.push(randCard);
  this.cards.splice(randIndex, 1) 
  }
 this.cards = shuffleCardArr;
}
 
  checkIfPair(card1, card2) {
    // ... write your code here
    //we need a method to compare cards
    this.pairsClicked+=1
    if (card1===card2){
      this.pairsGuessed +=1;
      return true;
    }
    else {return false};
  }

  checkIfFinished() {
  const totalPairs = this.cards.length/2
  if (this.pairsGuessed === totalPairs){
    return true;
    }
    else {
    return false;
    }
  }
}
