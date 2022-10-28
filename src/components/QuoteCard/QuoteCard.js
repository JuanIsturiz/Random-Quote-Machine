import { useEffect, useState, useRef } from "react";
import "./QuoteCard.css";
import NewQuoteButton from "../NewQuoteButton/NewQuoteButton";
import ShareButtons from "../ShareButtons/ShareButtons";
import Quote from "../Quote/Quote";
import { fetchQuotes } from "../../assets/API/fetchQuotes";

const QuoteCard = ({ color, onColor }) => {
  //state for the quotes array
  const [quotes, setQuotes] = useState([]);
  //state for the current quote object
  const [quote, setQuote] = useState({});
  //state for the fade animation
  const [fade, setFade] = useState(false);

  //ref for the useEffect esLint warning fix
  const onColorRef = useRef();
  onColorRef.current = onColor;

  //startup effect
  useEffect(() => {
    setTimeout(() => setFade(true), 250);
    setTimeout(() => {
      fetchQuotes().then((quotes) => {
        setQuotes(quotes);
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
      });
    }, 500);
    setTimeout(() => {
      onColorRef.current();
      setFade(false);
    }, 750);
  }, []);

  //function that updates current quote
  const changeQuote = () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    if (newQuote.id === quote.id) changeQuote();
    setTimeout(() => setQuote(newQuote), 500);
  };

  //function that handles the animation
  const handleFade = () => {
    setFade(true);
    setTimeout(() => setFade(false), 750);
  };

  return (
    <div
      className="card"
      id="quote-box"
      style={{ color: fade ? "transparent" : color }}
    >
      {!quote.hasOwnProperty("text") ? (
        <i className="fa-solid fa-quote-left" id="initial"></i>
      ) : (
        <>
          <Quote quote={quote} color={color} fade={fade} />
          <div className="buttons">
            <div>
              <ShareButtons social="tumblr" quote={quote} color={color} />
              <ShareButtons social="twitter" quote={quote} color={color} />
            </div>
            <NewQuoteButton
              changeQuote={changeQuote}
              color={color}
              onFade={handleFade}
              onColor={onColor}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default QuoteCard;
