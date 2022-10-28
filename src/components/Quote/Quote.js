import "./Quote.css";

const Quote = ({ quote: { text, author }, color, fade }) => {
  return (
    <div className="quote" style={{ color: color, opacity: fade ? 0 : 1 }}>
      <div className="icon-text">
        <i className="fa-solid fa-quote-left"></i>
        <h3 id="text">{text}</h3>
      </div>
      <p id="author">- {!author ? "Anonymous" : author}</p>
    </div>
  );
};

export default Quote;
