import './Quotes.css';

import {
  useEffect,
  useState,
} from 'react';

import { MdRefresh } from 'react-icons/md';

import gus from '../assets/draws/gus.png';
import hank from '../assets/draws/hank.png';
import jesse from '../assets/draws/jesse.png';
import walter from '../assets/draws/walter.png';
import { getQuote } from '../utils/getData';

const draws = {
  walter,
  jesse,
  hank,
  gus,
};

function Quotes() {
  const [quotes, setQuotes] = useState({ author: "", quote: "" });
  const [author, setAuthor] = useState("");

  const handleQuoteFetch = () => {
    getQuote().then((quotes) => setQuotes(quotes));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(quotes.quote);
  };

  useEffect(() => {
    handleQuoteFetch();
  }, []);

  useEffect(() => {
    setAuthor(quotes.author.split(" ")[0].toLowerCase());
  }, [quotes.author]);

  return (
    <section className="quotes-container">
      <p className="quote">{quotes.quote}</p>
      <div className="img-container">
        <img className="author-image" src={draws[author]} alt="quote author image" />
        <span className="author">{quotes.author}</span>
      </div>
      <div className="buttons-container">
        <MdRefresh onClick={handleQuoteFetch} size="1.5rem" className="refreshBtn" />
        <button className="quoteBtn copy" onClick={copyToClipboard}>
          Copy
        </button>
        <button className="quoteBtn tweetBtn">Tweet</button>
      </div>
    </section>
  );
}

export default Quotes;
