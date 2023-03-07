import "./MemoryGame.css";

import { useEffect, useState } from "react";

import MemoryCard from "./MemoryCard";

const CARDS_IMG = [{ src: "./memory/danger.png" }, { src: "./memory/desert.png" }, { src: "./memory/faces.png" }, { src: "./memory/gun.png" }, { src: "./memory/rv.png" }, { src: "./memory/throne.png" }];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...CARDS_IMG, ...CARDS_IMG].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random(), matched: false }));
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleSelection = (card) => {
    choice1 ? setChoice2(card) : setChoice1(card);
  };

  const resetTurn = () => {
    setChoice1(null);
    setChoice2(null);
    setTurns((prevTurn) => ++prevTurn);
  };

  useEffect(() => {
    let timerId;
    if (choice1 && choice2) {
      if (choice1.src === choice2.src) {
        setCards((prevCard) => {
          return prevCard.map((card) => {
            return card.src === choice1.src ? { ...card, matched: true } : card;
          });
        });
      }
      timerId = setTimeout(() => resetTurn(), 500);
    }

    return () => clearTimeout(timerId);
  }, [choice2]);

  return (
    <div className="board-container">
      <div>
        <h1>Bad Memory Game</h1>
        <button onClick={shuffleCards}>New Game</button>
        <span>Turns: {turns}</span>
      </div>
      <div className="board">
        {cards.map((card) => {
          return <MemoryCard key={card.id} card={card} handleSelection={handleSelection} flipped={card === choice1 || card === choice2 || card.matched} />;
        })}
      </div>
    </div>
  );
}

export default MemoryGame;
