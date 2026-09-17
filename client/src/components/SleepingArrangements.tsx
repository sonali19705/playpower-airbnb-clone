import type { Listing } from "../types/listing";
import { photos } from "../data/photos";

interface SleepingArrangementsProps {
  listing: Listing;
}

const SleepingArrangements = ({ listing }: SleepingArrangementsProps) => {
  const getImage = (name: string, image?: string) => {
    if (image) return image;

    const photo = photos.find(
      (item) =>
        item.category.toLowerCase() === name.toLowerCase() ||
        item.alt.toLowerCase().includes(name.toLowerCase())
    );

    return photo?.src || "";
  };

  return (
    <section className="sleeping-section">
      <h2>Where you'll sleep</h2>

      <div className="sleeping-arrangements-grid">
        {listing.sleepingArrangements.map((arrangement, index) => {
          const image = getImage(arrangement.name, arrangement.image);

          return (
            <article
              className="sleeping-card"
              key={`${arrangement.name}-${index}`}
            >
              {image && (
                <div className="sleeping-image-wrapper">
                  <img
                    src={image}
                    alt={`${arrangement.name} sleeping arrangement`}
                    className="sleeping-image"
                  />
                </div>
              )}

              <h3>{arrangement.name}</h3>
              <p>{arrangement.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SleepingArrangements;