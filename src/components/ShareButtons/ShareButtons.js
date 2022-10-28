import "./ShareButtons.css";

const ShareButtons = ({ quote: { text, author }, color, social }) => {
  //object with tumblr and twitter information
  const medias = {
    tumblr: {
      id: "tumblr-quote",
      href: `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${author}&content=${text}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`,
      icon: "fa fa-tumblr",
    },
    twitter: {
      id: "tweet-quote",
      href: `https://www.twitter.com/intent/tweet?text=${text} ${
        !author ? "Anonymous" : author
      }&hashtags=Quotes`,
      icon: "fa-brands fa-twitter",
    },
  };
  return (
    <a
      id={medias[social].id}
      href={medias[social].href}
      target="_blank"
      rel="noreferrer"
      style={{ backgroundColor: color }}
      className="btn"
    >
      <i className={medias[social].icon}></i>
    </a>
  );
};

export default ShareButtons;
