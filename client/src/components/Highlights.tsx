import { Fan, DoorOpen, Utensils } from "lucide-react";
import type { Listing } from "../types/listing";

interface HighlightsProps {
  listing: Listing;
}

const Highlights = ({ listing }: HighlightsProps) => {
  const getIcon = (icon?: string) => {
    switch (icon) {
      case "outdoor-entertainment":
        return Utensils;
      case "cool":
        return Fan;
      case "self-check-in":
        return DoorOpen;
      default:
        return DoorOpen;
    }
  };

  return (
    <section className="highlights">
      <h2>Highlights</h2>

      <div className="highlights-list">
        {listing.highlights.map((highlight, index) => {
          const Icon = getIcon(highlight.icon);

          return (
            <div
              className="highlight-item"
              key={`${highlight.title}-${index}`}
            >
              <div className="highlight-icon">
                <Icon size={28} strokeWidth={1.5} />
              </div>

              <div className="highlight-content">
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Highlights;