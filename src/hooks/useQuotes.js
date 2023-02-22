import { useState } from 'react';

const QUOTES_URL = "https://api.breakingbadquotes.xyz/v1/quotes";

export function useQuotes() {
  const [quotes, setQuotes] = useState({ author: "Walter White", quote: "Find what you love and let it kill you." });
  const [error, setError] = useState(null);

  const getQuote = async () => {
    try {
      const res = await fetch(QUOTES_URL);
      if (!res.ok) {
        throw new Error(res.status);
      }
      const data = await res.json();
      setError(null);
      setQuotes(data[0]);
    } catch (err) {
      setError(err);
    }
  };

  return { quotes, error, getQuote };
}
