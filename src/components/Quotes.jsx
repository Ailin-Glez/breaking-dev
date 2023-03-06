import "./Quotes.css";

import { useState } from "react";

import { IoLogoTwitter } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";

import { useQuotes } from "../hooks/useQuotes";

function Quotes() {
  const { quotes, error, getQuote } = useQuotes();
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`"${quotes?.quote}" Author: ${quotes.author}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const tweet = () => {
    const URL = `https://twitter.com/intent/tweet?hashtags=breakingDev,react,juniorDev,learning&text="${quotes.quote}" ${quotes.author}`;
    window.open(URL, "_blank");
  };

  return (
    <div className="card">
      <p className="quote">{quotes?.quote}</p>
      <img className="divider" src="./pattern-divider-desktop.svg" alt="divider" />
      <div className="btn-footer">
        <div className="buttons">
          <button disabled={error} className="quoteBtn copy" onClick={copyToClipboard}>
            <MdOutlineContentCopy />
          </button>
          <button onClick={tweet} disabled={error} className="quoteBtn tweetBtn">
            <IoLogoTwitter />
          </button>
          {isCopied && <span>Copied to clipboard</span>}
        </div>
        <p className="author">{quotes?.author}</p>
      </div>
      <button className="quote-btn" onClick={() => getQuote()}>
        <img className="walter-logo" src="./walter-white.png" alt="walter image" />
      </button>
    </div>
  );
}

export default Quotes;
