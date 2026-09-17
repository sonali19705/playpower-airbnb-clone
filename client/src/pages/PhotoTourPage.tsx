import { useState } from "react";
import PhotoTour from "../components/PhotoTour";
import Lightbox from "../components/Lightbox";
import { photos } from "../data/photos";

const PhotoTourPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <PhotoTour
        onPhotoClick={(index) => setLightboxIndex(index)}
      />

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
};

export default PhotoTourPage;