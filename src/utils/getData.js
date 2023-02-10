const QUOTES_URL = "https://api.breakingbadquotes.xyz/v1/quotes";

// TODO> handle errors
export const getQuote = () => {
  return fetch(QUOTES_URL)
    .then((res) => res.json())
    .then((data) => data[0]);
};
