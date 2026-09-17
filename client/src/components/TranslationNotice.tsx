import { useState } from "react";

const TranslationNotice = () => {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <section className="translation-notice">
      <p>
        {showOriginal
          ? "Some info has been automatically translated."
          : "Some info has been automatically translated."}{" "}
        <button
          type="button"
          onClick={() =>
            setShowOriginal((value) => !value)
          }
        >
          {showOriginal ? "Show translated" : "Show original"}
        </button>
      </p>
    </section>
  );
};

export default TranslationNotice;