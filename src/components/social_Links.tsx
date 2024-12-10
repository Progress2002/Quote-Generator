import { FaTumblr } from "react-icons/fa";
import { Quote } from "../App";
import { FaXTwitter } from "react-icons/fa6";

interface SocialLinksProps {
  bgColor: string;
  isError: boolean;
  quote: Quote;
}

export const SocialLinks = ({ bgColor, isError, quote }: SocialLinksProps) => {
  return (
    <div className="flex gap-1">
      <a
        id="tweet-quote"
        href={
          isError
            ? " "
            : `https://twitter.com/intent/tweet?hashtags=quotes&text=${quote.quote}+${quote.author}`
        }
        target="_blank"
        rel="noreferrer"
        className={`block rounded text-sm text-white p-2 hover:opacity-90 ${
          isError ? "hidden" : "block"
        }`}
        style={{
          backgroundColor: bgColor,
          transition: "background-color 1s ease",
        }}>
        <FaXTwitter size={20} />
      </a>
      <a
        id="tumblr-quote"
        href={
          isError
            ? ""
            : `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,caption=Confucius&content=${quote.quote}+${quote.author}&canonicalUrl=https%3A%2F%2Fwww.tumblr`
        }
        target="_blank"
        rel="noreferrer"
        className={`block rounded text-sm text-white p-2 hover:opacity-90 ${
          isError ? "hidden" : "block"
        }`}
        style={{
          backgroundColor: bgColor,
          transition: "background-color 1s ease",
        }}>
        <FaTumblr size={20} />
      </a>
    </div>
  );
};
