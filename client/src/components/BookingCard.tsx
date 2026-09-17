import { ChevronDown, Flag, Tag } from "lucide-react";
import { useEffect, useState } from "react";

const BookingCard = () => {
  const [guests, setGuests] = useState(2);
  const [showToast, setShowToast] = useState(false);

  const totalPrice = 28499;

  const handleReserve = () => {
    setShowToast(true);
  };

  useEffect(() => {
    if (!showToast) {
      return;
    }

    const timer = window.setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [showToast]);

  return (
    <>
      <section className="booking-section">
        {/* Discount banner */}
        <div className="booking-discount">
          <Tag size={22} strokeWidth={1.7} />

          <div className="booking-discount-text">
            <span>Get 10% off your next stay.</span>
            <a href="#terms">Terms apply</a>
          </div>

          <button type="button" className="claim-button">
            Claim
          </button>
        </div>

        {/* Booking card */}
        <div className="booking-card">
          <div className="booking-price">
            <strong>
              ₹{totalPrice.toLocaleString("en-IN")}
            </strong>

            <span>for 5 nights</span>
          </div>

          <div className="booking-fields">
            <div className="booking-date-row">
              <button
                type="button"
                className="booking-date-field"
              >
                <span className="booking-field-label">
                  CHECK-IN
                </span>

                <span>10/18/2026</span>
              </button>

              <button
                type="button"
                className="booking-date-field"
              >
                <span className="booking-field-label">
                  CHECKOUT
                </span>

                <span>10/23/2026</span>
              </button>
            </div>

            <div className="booking-guests-field">
              <div>
                <span className="booking-field-label">
                  GUESTS
                </span>

                <span>{guests} guests</span>
              </div>

              <button
                type="button"
                aria-label="Change number of guests"
                className="guest-dropdown-button"
                onClick={() =>
                  setGuests((value) =>
                    value === 2 ? 3 : 2
                  )
                }
              >
                <ChevronDown size={20} />
              </button>
            </div>
          </div>

          {/* Cancellation */}
          <div className="booking-cancellation">
            Free cancellation before{" "}
            <strong>17 October</strong>
          </div>

          {/* Reserve */}
          <button
            type="button"
            className="reserve-button"
            onClick={handleReserve}
          >
            Reserve
          </button>

          <p className="booking-note">
            You won't be charged yet
          </p>
        </div>

        {/* Report listing */}
        <button
          type="button"
          className="report-listing-button"
        >
          <Flag size={16} strokeWidth={1.7} />
          <span>Report this listing</span>
        </button>
      </section>

      {/* Reserve toast */}
      {showToast && (
        <div
          className="reserve-toast"
          role="status"
          aria-live="polite"
        >
          You won't be charged yet
        </div>
      )}
    </>
  );
};

export default BookingCard;