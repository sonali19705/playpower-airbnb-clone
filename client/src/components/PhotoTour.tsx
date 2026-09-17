import { useEffect, useState } from "react";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { photos } from "../data/photos";

interface PhotoTourProps {
  onPhotoClick: (index: number) => void;
}

interface PhotoCategory {
  name: string;
  description: string;
  images: typeof photos;
}

const PhotoTour = ({ onPhotoClick }: PhotoTourProps) => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] =
    useState("Living room 1");

  const categories: PhotoCategory[] = [
    {
      name: "Living room 1",
      description: "Sofa · Air conditioning · Ceiling fan · TV",
      images: photos.filter((photo) => photo.id === 1),
    },
    {
      name: "Living room 2",
      description: "Ceiling fan · Hot tub",
      images: photos.filter((photo) => photo.id === 2),
    },
    {
      name: "Full kitchen",
      description:
        "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster",
      images: photos.filter((photo) => photo.id === 3),
    },
    {
      name: "Bedroom",
      description:
        "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage",
      images: photos.filter((photo) => photo.id === 4),
    },
    {
      name: "Full bathroom",
      description: "Hairdryer · Hot water · Shampoo · Shower gel",
      images: photos.filter((photo) => photo.id === 5),
    },
    {
      name: "Gym",
      description:
        "Air conditioning · Gym · Exercise equipment · Ceiling fan",
      images: photos.filter((photo) => photo.id === 6),
    },
    {
      name: "Exterior",
      description: "Exterior of the building",
      images: photos.filter((photo) => photo.id === 7),
    },
    {
      name: "Pool",
      description: "Shared pool",
      images: photos.filter((photo) => photo.id === 8),
    },
    {
      name: "Additional photos",
      description: "",
      images: photos.filter((photo) =>
        [9, 10, 11, 12].includes(photo.id)
      ),
    },
  ];

  useEffect(() => {
    const sections = categories
      .map((category) =>
        document.getElementById(
          `photo-category-${category.name
            .toLowerCase()
            .replace(/\s+/g, "-")}`
        )
      )
      .filter(
        (section): section is HTMLElement =>
          section !== null
      );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          const category =
            visibleSections[0].target.getAttribute(
              "data-category"
            );

          if (category) {
            setActiveCategory(category);
          }
        }
      },
      {
        rootMargin: "-180px 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToCategory = (name: string) => {
    const element = document.getElementById(
      `photo-category-${name
        .toLowerCase()
        .replace(/\s+/g, "-")}`
    );

    if (!element) return;

    setActiveCategory(name);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="photo-tour">
      <header className="photo-tour-header">
        <button
          type="button"
          className="photo-tour-back"
          onClick={() => navigate("/")}
          aria-label="Back to listing"
        >
          <ArrowLeft
            size={24}
            strokeWidth={1.8}
          />
        </button>

        <h1>Photo tour</h1>

        <div className="photo-tour-actions">
          <button
            type="button"
            aria-label="Share"
            className="photo-tour-action"
          >
            <Share2
              size={22}
              strokeWidth={1.7}
            />
          </button>

          <button
            type="button"
            aria-label="Add to favorites"
            className="photo-tour-action"
          >
            <Heart
              size={23}
              strokeWidth={1.7}
            />
          </button>
        </div>
      </header>

      {/* Horizontal photo category navigation */}
      <nav
        className="photo-tour-nav"
        aria-label="Photo categories"
      >
        <div className="photo-tour-nav-inner">
          {categories.map((category) => {
            const preview = category.images[0];

            if (!preview) return null;

            const isActive =
              activeCategory === category.name;

            return (
              <button
                type="button"
                className={
                  isActive
                    ? "photo-tour-nav-item active"
                    : "photo-tour-nav-item"
                }
                key={category.name}
                onClick={() =>
                  scrollToCategory(category.name)
                }
                aria-current={
                  isActive ? "true" : undefined
                }
              >
                <img
                  src={preview.src}
                  alt=""
                  className="photo-tour-nav-image"
                />

                <span className="photo-tour-nav-label">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      <main className="photo-tour-content">
        {categories.map((category) => {
          if (category.images.length === 0) {
            return null;
          }

          const categoryId =
            `photo-category-${category.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`;

          return (
            <section
              className="photo-tour-category"
              id={categoryId}
              data-category={category.name}
              key={category.name}
            >
              <div className="photo-tour-info">
                <h2>{category.name}</h2>

                {category.description && (
                  <p>{category.description}</p>
                )}
              </div>

              <div className="photo-tour-gallery">
                {category.images.map(
                  (photo, imageIndex) => {
                    const globalIndex =
                      photos.findIndex(
                        (item) =>
                          item.id === photo.id
                      );

                    const isFirst =
                      imageIndex === 0;

                    const hasMultipleImages =
                      category.images.length > 1;

                    return (
                      <button
                        type="button"
                        className={
                          isFirst &&
                          hasMultipleImages
                            ? "photo-tour-image photo-tour-image-featured"
                            : "photo-tour-image"
                        }
                        key={photo.id}
                        onClick={() =>
                          onPhotoClick(globalIndex)
                        }
                        aria-label={`Open ${photo.alt}`}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                        />
                      </button>
                    );
                  }
                )}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default PhotoTour;