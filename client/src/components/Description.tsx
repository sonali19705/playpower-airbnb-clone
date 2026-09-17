import { useState } from "react";
import type { Listing } from "../types/listing";

interface DescriptionProps {
  listing: Listing;
}

const Description = ({ listing }: DescriptionProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="description-section">
      

      <div
        className={
          expanded
            ? "description-text expanded"
            : "description-text"
        }
      >
        <p>{listing.description}</p>
      </div>

      <button
        type="button"
        className="description-more"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
      >
        {expanded ? "Show less" : "Show more"}
      </button>
    </section>
  );
};

export default Description;