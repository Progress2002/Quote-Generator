import { CgSpinnerTwoAlt } from "react-icons/cg";

interface NewQuoteButtonProps {
  bgColor: string;
  loading: boolean;
  getNewQuote: () => void;
}

export const NewQuoteButton = ({
  bgColor,
  loading,
  getNewQuote,
}: NewQuoteButtonProps) => {
  return (
    <button
      type="button"
      id="new-quote"
      className="rounded text-sm text-white flex justify-center px-5 py-2 min-w-28 hover:opacity-90"
      onClick={getNewQuote}
      style={{
        backgroundColor: bgColor,
        transition: "background-color 1s ease",
      }}>
      {loading ? (
        <CgSpinnerTwoAlt
          size={20}
          className="animate-spin "
          style={{ animationDuration: "2s" }}
        />
      ) : (
        "New Quote"
      )}
    </button>
  );
};
