function MemoryCard({ card, handleSelection, flipped }) {
  return (
    // <div className="card">
    <div className={flipped ? "main-card flipped" : "main-card"}>
      <img className="front" src={card.src} alt="front card" />
      <img className="back" src={"./memory/back.png"} alt="back card" onClick={() => handleSelection(card)} />
    </div>
    // </div>
  );
}

export default MemoryCard;
