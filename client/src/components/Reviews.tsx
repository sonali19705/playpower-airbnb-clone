import { useEffect, useMemo, useState } from "react";
import {
  Check,
  KeyRound,
  Map,
  MessageCircle,
  Sparkles,
  Tag,
  Waves,
  SprayCan,
  Gift,
  BedDouble,
} from "lucide-react";
import { getReviews } from "../services/api";
import type { Listing, Review } from "../types/listing";

interface ReviewsProps {
  listing: Listing;
}

const Reviews = ({ listing }: ReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getReviews(listing._id);
        setReviews(data);
      } catch (err) {
        console.error("Failed to load reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, [listing._id]);

  const ratingCounts = useMemo(() => {
    return {
      5: reviews.filter((review) => review.rating === 5).length,
      4: reviews.filter((review) => review.rating === 4).length,
      3: reviews.filter((review) => review.rating === 3).length,
      2: reviews.filter((review) => review.rating === 2).length,
      1: reviews.filter((review) => review.rating === 1).length,
    };
  }, [reviews]);

  const ratingPercentage = (rating: number) => {
    if (!reviews.length) return 0;

    return (
      (ratingCounts[rating as keyof typeof ratingCounts] /
        reviews.length) *
      100
    );
  };

  const categories = [
    {
      name: "Cleanliness",
      rating: "5.0",
      icon: SprayCan,
    },
    {
      name: "Accuracy",
      rating: "5.0",
      icon: Check,
    },
    {
      name: "Check-in",
      rating: "5.0",
      icon: KeyRound,
    },
    {
      name: "Communication",
      rating: "5.0",
      icon: MessageCircle,
    },
    {
      name: "Location",
      rating: "4.8",
      icon: Map,
    },
    {
      name: "Value",
      rating: "4.8",
      icon: Tag,
    },
  ];

  const reviewHighlights = [
    {
      label: "Comfort",
      count: 6,
      icon: BedDouble,
    },
    {
      label: "Accuracy",
      count: 5,
      icon: Check,
    },
    {
      label: "Hot tub",
      count: 5,
      icon: Waves,
    },
    {
      label: "Condition",
      count: 4,
      icon: SprayCan,
    },
    {
      label: "Hospitality",
      count: 8,
      icon: Gift,
    },
    {
      label: "Cleanliness",
      count: 4,
      icon: Sparkles,
    },
    {
      label: "Amenities",
      count: 2,
      icon: Tag,
    },
  ];

  return (
    <section className="reviews-section">

      {/* =========================================
          TOP RATING
      ========================================= */}

      <div className="reviews-hero">

        <div className="reviews-laurel-wrapper">
          <div className="reviews-laurel-wrapper">

            <svg
              className="reviews-laurel-svg reviews-laurel-left"
              viewBox="0 0 120 150"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="laurelGradientLeft" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#555555" />
                  <stop offset="45%" stopColor="#222222" />
                  <stop offset="100%" stopColor="#111111" />
                </linearGradient>
              </defs>

              <path
                d="M102 137 C67 132 36 106 31 70 C28 49 36 28 49 14"
                fill="none"
                stroke="#222222"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              <ellipse
                cx="48"
                cy="18"
                rx="9"
                ry="20"
                transform="rotate(28 48 18)"
                fill="url(#laurelGradientLeft)"
              />

              <ellipse
                cx="38"
                cy="40"
                rx="9"
                ry="20"
                transform="rotate(48 38 40)"
                fill="url(#laurelGradientLeft)"
              />

              <ellipse
                cx="34"
                cy="64"
                rx="9"
                ry="20"
                transform="rotate(70 34 64)"
                fill="url(#laurelGradientLeft)"
              />

              <ellipse
                cx="39"
                cy="88"
                rx="9"
                ry="20"
                transform="rotate(105 39 88)"
                fill="url(#laurelGradientLeft)"
              />

              <ellipse
                cx="51"
                cy="108"
                rx="9"
                ry="20"
                transform="rotate(125 51 108)"
                fill="url(#laurelGradientLeft)"
              />
            </svg>


            <div className="reviews-hero-rating">
              {listing.rating.toFixed(2)}
            </div>


            <svg
              className="reviews-laurel-svg reviews-laurel-right"
              viewBox="0 0 120 150"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="laurelGradientRight" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#555555" />
                  <stop offset="45%" stopColor="#222222" />
                  <stop offset="100%" stopColor="#111111" />
                </linearGradient>
              </defs>

              <path
                d="M18 137 C53 132 84 106 89 70 C92 49 84 28 71 14"
                fill="none"
                stroke="#222222"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              <ellipse
                cx="72"
                cy="18"
                rx="9"
                ry="20"
                transform="rotate(-28 72 18)"
                fill="url(#laurelGradientRight)"
              />

              <ellipse
                cx="82"
                cy="40"
                rx="9"
                ry="20"
                transform="rotate(-48 82 40)"
                fill="url(#laurelGradientRight)"
              />

              <ellipse
                cx="86"
                cy="64"
                rx="9"
                ry="20"
                transform="rotate(-70 86 64)"
                fill="url(#laurelGradientRight)"
              />

              <ellipse
                cx="81"
                cy="88"
                rx="9"
                ry="20"
                transform="rotate(-105 81 88)"
                fill="url(#laurelGradientRight)"
              />

              <ellipse
                cx="69"
                cy="108"
                rx="9"
                ry="20"
                transform="rotate(-125 69 108)"
                fill="url(#laurelGradientRight)"
              />
            </svg>

          </div>
        </div>

        <h2>Guest favourite</h2>

        <p>
          This home is a guest favourite based on ratings,
          reviews and reliability.
        </p>

        <button
          type="button"
          className="how-reviews-work"
        >
          How reviews work
        </button>
      </div>

      {/* =========================================
          RATING DETAILS
      ========================================= */}

      <div className="reviews-rating-details">

        <div className="overall-rating">
          <h3>Overall rating</h3>

          {[5, 4, 3, 2, 1].map((rating) => (
            <div
              className="overall-rating-row"
              key={rating}
            >
              <span>{rating}</span>

              <div className="overall-rating-bar">
                <div
                  className="overall-rating-fill"
                  style={{
                    width: `${ratingPercentage(rating)}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="category-ratings">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                className="category-rating"
                key={category.name}
              >
                <span className="category-rating-name">
                  {category.name}
                </span>

                <strong>{category.rating}</strong>

                <Icon
                  size={32}
                  strokeWidth={1.5}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================
          REVIEW HIGHLIGHTS
      ========================================= */}

      <div className="review-highlights">

        {reviewHighlights.map((item) => {
          const Icon = item.icon;

          return (
            <button
              type="button"
              className="review-highlight-chip"
              key={item.label}
            >
              <Icon
                size={19}
                strokeWidth={1.5}
              />

              <span>{item.label}</span>

              <strong>{item.count}</strong>
            </button>
          );
        })}
      </div>

      {/* =========================================
          REVIEWS
      ========================================= */}

      <div className="reviews-list-section">

        <h2>Reviews</h2>

        {loading && (
          <p className="reviews-status">
            Loading reviews...
          </p>
        )}

        {!loading && error && (
          <p className="reviews-status reviews-error">
            {error}
          </p>
        )}

        {!loading && !error && (
          <>
            <div className="reviews-grid">

              {reviews.map((review) => (
                <article
                  className="review-card"
                  key={review._id}
                >
                  <div className="review-user">

                    <div className="review-avatar">
                      {review.user.avatar ? (
                        <img
                          src={review.user.avatar}
                          alt=""
                        />
                      ) : null}
                    </div>

                    <div>
                      <h3>{review.user.name}</h3>

                      {review.user.location && (
                        <p>{review.user.location}</p>
                      )}
                    </div>
                  </div>

                  <div className="review-meta">

                    <div className="review-stars">
                      {Array.from({
                        length: review.rating,
                      }).map((_, index) => (
                        <span key={index}>★</span>
                      ))}
                    </div>

                    <span>·</span>

                    <span>{review.date}</span>
                  </div>

                  <p className="review-text">
                    {review.text}
                  </p>
                </article>
              ))}

            </div>

            <button
              type="button"
              className="show-all-reviews"
            >
              Show all {listing.reviewCount} reviews
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Reviews;