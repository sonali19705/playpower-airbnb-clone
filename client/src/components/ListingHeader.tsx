import { Heart, Share2 } from "lucide-react";
import type { Listing } from "../types/listing";

interface ListingHeaderProps {
  listing: Listing;
}

const ListingHeader = ({ listing }: ListingHeaderProps) => {
  return (
    <section className="listing-header">
      <div className="listing-header-top">
        <h1>{listing.title}</h1>

        <div className="listing-actions">
          <button
            type="button"
            className="listing-action"
          >
            <Share2 size={17} strokeWidth={2} />
            <span>Share</span>
          </button>

          <button
            type="button"
            className="listing-action"
          >
            <Heart size={17} strokeWidth={2} />
            <span>Save</span>
          </button>
        </div>
      </div>

      <div className="listing-meta">
        <div className="listing-location">
          <span>★</span>
          <span>Guest favourite</span>
          <span>·</span>
          <span>{listing.rating}</span>
          <span>·</span>
          <span className="underlined">
            {listing.reviewCount} reviews
          </span>
          <span>·</span>
          <span className="underlined">
            {listing.location}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ListingHeader;