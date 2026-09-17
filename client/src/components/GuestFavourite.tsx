import { Leaf, Star } from "lucide-react";
import type { Listing } from "../types/listing";

interface GuestFavouriteProps {
  listing: Listing;
}

const Laurel = ({ side }: { side: "left" | "right" }) => {
  return (
    <div className={`guest-laurel guest-laurel-${side}`} aria-hidden="true">
      <Leaf className="laurel-leaf leaf-1" size={20} />
      <Leaf className="laurel-leaf leaf-2" size={20} />
      <Leaf className="laurel-leaf leaf-3" size={20} />
      <Leaf className="laurel-leaf leaf-4" size={20} />
    </div>
  );
};

const GuestFavourite = ({ listing }: GuestFavouriteProps) => {
  return (
    <section className="guest-favourite">
      <div className="guest-favourite-badge">
        <Laurel side="left" />

        <strong>
          Guest
          <br />
          favourite
        </strong>

        <Laurel side="right" />
      </div>

      <div className="guest-favourite-description">
        <p>
          One of the most loved homes on Airbnb,
          <br />
          according to guests.
        </p>
      </div>

      <div className="guest-favourite-rating">
        <div className="guest-rating-value">
          <strong>{listing.rating}</strong>

          <div
            className="guest-rating-stars"
            aria-label={`${listing.rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={14}
                fill="currentColor"
                strokeWidth={1.5}
              />
            ))}
          </div>
        </div>

        <div className="guest-rating-divider" />

        <div className="guest-review-count">
          <strong>{listing.reviewCount}</strong>
          <span>Reviews</span>
        </div>
      </div>
    </section>
  );
};

export default GuestFavourite;