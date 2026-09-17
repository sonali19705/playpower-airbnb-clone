import { Images } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { photos } from "../data/photos";

const HeroGallery = () => {
  const navigate = useNavigate();

  const heroImages = photos.slice(0, 5);

  if (heroImages.length === 0) {
    return null;
  }

  const openPhotoTour = (index: number) => {
    navigate(`/photos?photo=${index}`);
  };

  return (
    <section
      className="hero-gallery"
      aria-label="Property photos"
    >
      <button
        type="button"
        className="hero-main-image"
        onClick={() => openPhotoTour(0)}
        aria-label="Open property photos"
      >
        <img
          src={heroImages[0].src}
          alt={heroImages[0].alt}
        />
      </button>

      <div className="hero-side-images">
        {heroImages.slice(1).map((photo, index) => (
          <button
            type="button"
            className="hero-small-image"
            key={photo.id}
            onClick={() => openPhotoTour(index + 1)}
            aria-label={`Open ${photo.alt}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
            />
          </button>
        ))}
      </div>

      <button
        type="button"
        className="show-all-photos"
        onClick={() => openPhotoTour(0)}
      >
        <Images size={16} strokeWidth={2} />
        <span>Show all photos</span>
      </button>
    </section>
  );
};

export default HeroGallery;