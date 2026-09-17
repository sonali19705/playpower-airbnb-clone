import type { Listing } from "../types/listing";

interface PropertyOverviewProps {
  listing: Listing;
}

const PropertyOverview = ({
  listing,
}: PropertyOverviewProps) => {
  return (
    <section className="property-overview">
      <h1>
        {listing.propertyType} in {listing.location}
      </h1>

      <p className="property-overview-summary">
        {listing.guests} guests · {listing.bedrooms} bedroom ·{" "}
        {listing.beds} bed · {listing.bathrooms} bathroom
      </p>
    </section>
  );
};

export default PropertyOverview;