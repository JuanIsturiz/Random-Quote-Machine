import "./NewQuoteButton.css";

const NewQuoteButton = ({ changeQuote, color, onFade, onColor }) => {
  return (
    <button
      id="new-quote"
      onClick={() => {
        changeQuote();
        onColor();
        onFade();
      }}
      style={{ backgroundColor: color }}
    >
      New Quote
    </button>
  );
};

export default NewQuoteButton;
