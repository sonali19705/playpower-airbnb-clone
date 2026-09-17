import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import type { Photo } from "../data/photos";

interface LightboxProps {
  photos: Photo[];
  initialIndex: number;
  onClose: () => void;
}

const Lightbox = ({
  photos,
  initialIndex,
  onClose,
}: LightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const closeRef = useRef<HTMLButtonElement>(null);
  const previousRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const currentPhoto = photos[currentIndex];

  const goPrevious = () => {
    setCurrentIndex(
      (index) => (index - 1 + photos.length) % photos.length
    );
  };

  const goNext = () => {
    setCurrentIndex(
      (index) => (index + 1) % photos.length
    );
  };

  /*
   * Focus management + keyboard controls
   */
  useEffect(() => {
    previousFocusRef.current =
      document.activeElement as HTMLElement | null;

    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();

        setCurrentIndex((index) =>
          (index - 1 + photos.length) % photos.length
        );

        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();

        setCurrentIndex(
          (index) => (index + 1) % photos.length
        );

        return;
      }
      /*
       * Keep keyboard focus inside the lightbox
       */
      if (event.key === "Tab") {
        const focusableElements = [
          closeRef.current,
          previousRef.current,
          nextRef.current,
        ].filter(
          (element): element is HTMLButtonElement =>
            element !== null
        );

        if (focusableElements.length === 0) {
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement =
          focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === lastElement
        ) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [onClose]);

  /*
   * Prevent background page scrolling
   */
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      <div className="lightbox-topbar">
        <span className="lightbox-counter">
          {currentIndex + 1} / {photos.length}
        </span>

        <button
          ref={closeRef}
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close photo viewer"
        >
          <X size={24} />
        </button>
      </div>

      <button
        ref={previousRef}
        type="button"
        className="lightbox-arrow lightbox-arrow-left"
        onClick={goPrevious}
        aria-label="Previous photo"
      >
        <ChevronLeft size={34} />
      </button>

      <div className="lightbox-image-container">
        <img
          key={currentPhoto.id}
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          className="lightbox-image"
        />
      </div>

      <button
        ref={nextRef}
        type="button"
        className="lightbox-arrow lightbox-arrow-right"
        onClick={goNext}
        aria-label="Next photo"
      >
        <ChevronRight size={34} />
      </button>
    </div>
  );
};

export default Lightbox;