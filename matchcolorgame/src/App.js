import React from 'react';
import './App.css';
import Card from './card';
import shuffle from 'shuffle-array';
import Navbar from './navbar';

const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2,
};

class App extends React.Component {

  constructor(props) {
    super(props);

    let cards = [
      {id: 0, cardState: CardState.HIDING, backgroundColor: 'Aqua'},
      {id: 1, cardState: CardState.HIDING, backgroundColor: 'Aqua'},
      {id: 2, cardState: CardState.HIDING, backgroundColor: 'Brown'},
      {id: 3, cardState: CardState.HIDING, backgroundColor: 'Brown'},
      {id: 4, cardState: CardState.HIDING, backgroundColor: 'CadetBlue'},
      {id: 5, cardState: CardState.HIDING, backgroundColor: 'Chartreuse'},
      {id: 6, cardState: CardState.HIDING, backgroundColor: 'Chartreuse'},
      {id: 7, cardState: CardState.HIDING, backgroundColor: 'Crimson'},
      {id: 8, cardState: CardState.HIDING, backgroundColor: 'CadetBlue'},
      {id: 9, cardState: CardState.HIDING, backgroundColor: 'Crimson'},
      {id: 10, cardState: CardState.HIDING, backgroundColor: 'Green'},
      {id: 11, cardState: CardState.HIDING, backgroundColor: 'Green'},
      {id: 12, cardState: CardState.HIDING, backgroundColor: 'Pink'},
      {id: 13, cardState: CardState.HIDING, backgroundColor: 'Pink'},
      {id: 14, cardState: CardState.HIDING, backgroundColor: 'Yellow'},
      {id: 15, cardState: CardState.HIDING, backgroundColor: 'Yellow'},
      {id: 16, cardState: CardState.HIDING, backgroundColor: 'Orange'},
      {id: 17, cardState: CardState.HIDING, backgroundColor: 'Orange'},
      {id: 18, cardState: CardState.HIDING, backgroundColor: 'Purple'},
      {id: 19, cardState: CardState.HIDING, backgroundColor: 'Purple'},
      {id: 20, cardState: CardState.HIDING, backgroundColor: 'Violet'},
      {id: 21, cardState: CardState.HIDING, backgroundColor: 'Violet'},
      {id: 22, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 23, cardState: CardState.HIDING, backgroundColor: 'black'},
    ];
    cards = shuffle(cards);
    this.state = {cards, noClick: false};

    this.resetGame = this.resetGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(id) {

    const changeCardState = (cards, changedCardsId, newCardState) => {
      return cards.map((card, index) => {
        if(changedCardsId.includes(card.id)) {
          return {
            ...card,
            cardState: newCardState
          };
        }
        else 
          return card;
      });  
    }
    
    const clickedCard = this.state.cards.find(card => card.id === id);
    
    if(this.state.noClick || clickedCard.cardState !== CardState.HIDING)
      return;

    let noClick = false;

    let cards = changeCardState(this.state.cards, [id], CardState.SHOWING);

    const showingCards = cards.filter(card => card.cardState === CardState.SHOWING);

    const ids = showingCards.map(c => c.id);

    if(showingCards.length === 2 && showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
      cards = changeCardState(cards, ids, CardState.MATCHING);
    }
    else if(showingCards.length === 2) {
      let hidingCards = changeCardState(this.state.cards, ids, CardState.HIDING);
      noClick = true;
      this.setState({cards, noClick}, () => {
        setTimeout(() => {
          this.setState({cards:hidingCards, noClick:false});
        }, 1300);
      });
    }
    return this.setState({cards, noClick});
  }

  resetGame() {
    let cards = this.state.cards.map((c, ind) => (
      {
        ...c,
        cardState: CardState.HIDING
      }
    ));
    this.setState({cards});
  }

  render () {
    const cards = this.state.cards.map((card, index) => {
      return (
        <Card key={card.id}
          showing={card.cardState !== CardState.HIDING}
          backgroundColor={card.backgroundColor} onClick={() => {this.handleClick(card.id)}}/>
      );
    });
    return (
      <div className="App">
        <Navbar onClick={() => {this.resetGame()}}/>
        {cards}
      </div>
    )
  }
}

export default App;
