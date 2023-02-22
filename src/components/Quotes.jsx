import './Quotes.css';

import { useState } from 'react';
import { MdRefresh } from 'react-icons/md';
import { useQuotes } from '../hooks/useQuotes';

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

  return (
    <section className="quotes-container">
      <p className="quotation-mark">“</p>
      {error ? <p>Something went wrong getting the quote</p>
        : <div>
          <p className="quote">{quotes?.quote}</p>
          <span className="author">{quotes?.author}</span>
        </div>
    }
      <div className="buttons-container">
        <MdRefresh onClick={() => getQuote()} size="1.5rem" className="refreshBtn" />
        {isCopied && <span>Copied to clipboard</span>}
        <button disabled={error} className="quoteBtn copy" onClick={copyToClipboard}>
          Copy
        </button>
        <button disabled={error} className="quoteBtn tweetBtn">
          Tweet
        </button>
      </div>
    </section>
  );
}

export default Quotes;
