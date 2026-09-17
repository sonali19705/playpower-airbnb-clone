import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NearbyListings = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const listings = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80",
      title: "Beautiful Studio with a view to die for",
      price: "₹23,600",
      rating: "4.91",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=80",
      title: "NAQAB - 1bhk with private pool",
      price: "₹42,218",
      rating: "4.95",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=80",
      title: "Greentique Luxury Flat with plunge pool, Calangute",
      price: "₹44,506",
      rating: "4.94",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=80",
      title: "The Tropical Studio | 5 mins to Beach",
      price: "₹22,824",
      rating: "4.96",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=700&q=80",
      title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
      price: "₹39,942",
      rating: "4.95",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=80",
      title: "Modern luxury apartment in Goa",
      price: "₹31,500",
      rating: "4.92",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=80",
      title: "Peaceful stay near Candolim",
      price: "₹28,900",
      rating: "4.90",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=700&q=80",
      title: "Beautiful Goa home with pool",
      price: "₹36,200",
      rating: "4.93",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80",
      title: "Stylish apartment near beach",
      price: "₹27,800",
      rating: "4.91",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=80",
      title: "Luxury stay in North Goa",
      price: "₹41,300",
      rating: "4.96",
    },
  ];

  const updateScrollState = () => {
    const container = scrollRef.current;

    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 5);

    setCanScrollRight(
      container.scrollLeft + container.clientWidth <
        container.scrollWidth - 5
    );
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;

    if (!container) return;

    const amount = container.clientWidth + 24;

    container.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });

    window.setTimeout(updateScrollState, 400);
  };

  return (
    <section className="nearby-listings">

      <div className="nearby-header">
        <h2>More stays nearby</h2>

        <div className="nearby-controls">
          <span>1 / 2</span>

          <button
            type="button"
            className={`nearby-arrow ${
              !canScrollLeft ? "nearby-arrow-disabled" : ""
            }`}
            aria-label="Previous nearby listings"
            disabled={!canScrollLeft}
            onClick={() => scroll("left")}
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            className={`nearby-arrow ${
              !canScrollRight ? "nearby-arrow-disabled" : ""
            }`}
            aria-label="Next nearby listings"
            disabled={!canScrollRight}
            onClick={() => scroll("right")}
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="nearby-grid"
        onScroll={updateScrollState}
      >
        {listings.map((listing) => (
          <article className="nearby-card" key={listing.id}>

            <button
              type="button"
              className="nearby-image-button"
              aria-label={`View ${listing.title}`}
            >
              <img
                src={listing.image}
                alt={listing.title}
              />
            </button>

            <div className="nearby-card-info">
              <h3>{listing.title}</h3>

              <div className="nearby-card-price-rating">
                <strong>{listing.price}</strong>

                <span>
                  ★ {listing.rating}
                </span>
              </div>
            </div>

          </article>
        ))}
      </div>

    </section>
  );
};

export default NearbyListings;