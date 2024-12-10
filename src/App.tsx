import { FaQuoteLeft } from "react-icons/fa";
import GetQuote from "./api";
import { useEffect, useState } from "react";
import { NewQuoteButton } from "./components/buttons";
import { SocialLinks } from "./components/social_Links";
import Footer from "./components/footer";

export interface Quote {
  quote: string;
  author: string;
  category: string;
}

const initialQuoteState = {
  quote: "",
  author: "",
  category: "",
};

function App() {
  const [quote, setQuote] = useState<Quote>(initialQuoteState);
  const [bgColor, setBgColor] = useState<string>("#900C3F");
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(true);
  const [fade, setFade] = useState<boolean>(false); // State to trigger the fade animation

  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = async () => {
    setLoading(true);
    const newQuote = await GetQuote();

    if (newQuote) {
      setFade(true); // Trigger fade out effect
      setTimeout(() => {
        setQuote(newQuote[0]);
        setBgColor(
          `#${Math.floor(Math.random() * 128).toString(16)}${Math.floor(
            Math.random() * 128
          ).toString(16)}${Math.floor(Math.random() * 128).toString(16)}`
        );
        setFade(false); // Trigger fade-in effect
        setLoading(false);
        setIsError(false);
      }, 1000); // Wait for fade-out to complete before updating the quote
    } else {
      setTimeout(() => {
        setQuote(initialQuoteState);
        setLoading(false);
        setIsError(true);
      }, 1000);
    }
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center overflow-x-hidden"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 1s ease",
      }}>
      <div className="w-[95%] md:w-[550px]">
        <div
          id="quote-box"
          className="bg-white rounded px-5 md:px-14 py-10 mt-12">
          <h1
            id="text"
            className={`flex items-baseline font-roboto_slab gap-2 text-xl md:text-2xl font-normal transition-opacity duration-1000  ${
              fade ? "opacity-20" : "opacity-100"
            }`} // Apply fade-out and fade-in transition
            style={{ color: bgColor }}>
            <span className="inline">
              <FaQuoteLeft
                size={30}
                style={{
                  color: bgColor,
                }}
              />
            </span>
            <span>{quote.quote}</span>
          </h1>
          <p
            id="author"
            className={`text-right text-base font-roboto_slab font-normal pt-4 transition-opacity duration-1000 ${
              fade ? "opacity-20" : "opacity-100"
            }`}
            style={{ color: bgColor }}>
            {" "}
            -<span className="ml-2">{quote?.author}</span>
          </p>
          <div className="flex justify-between items-center mt-7">
            <SocialLinks bgColor={bgColor} isError={isError} quote={quote} />
            <NewQuoteButton
              bgColor={bgColor}
              loading={loading}
              getNewQuote={getNewQuote}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
