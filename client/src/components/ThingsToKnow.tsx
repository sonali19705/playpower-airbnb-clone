import {
  CalendarDays,
  KeyRound,
  Shield,
} from "lucide-react";

const ThingsToKnow = () => {
  return (
    <section className="things-to-know">
      <h2>Things to know</h2>

      <div className="things-grid">

        {/* Cancellation policy */}
        <div className="things-column">
          <CalendarDays
            className="things-column-icon"
            size={30}
            strokeWidth={1.5}
          />

          <h3>Cancellation policy</h3>

          <p>
            Free cancellation before 17 October. Cancel before
            check-in on 18 October for a partial refund.
          </p>

          <p>
            Review this host's full policy for details.
          </p>

          <button type="button" className="things-learn-more">
            Learn more
          </button>
        </div>

        {/* House rules */}
        <div className="things-column">
          <KeyRound
            className="things-column-icon"
            size={30}
            strokeWidth={1.5}
          />

          <h3>House rules</h3>

          <p>Check-in after 2:00 pm</p>

          <p>Checkout before 11:00 am</p>

          <p>3 guests maximum</p>

          <button type="button" className="things-learn-more">
            Learn more
          </button>
        </div>

        {/* Safety & property */}
        <div className="things-column">
          <Shield
            className="things-column-icon"
            size={30}
            strokeWidth={1.5}
          />

          <h3>Safety & property</h3>

          <p>Carbon monoxide alarm not reported</p>

          <p>Smoke alarm not reported</p>

          <p>Exterior security cameras on property</p>

          <button type="button" className="things-learn-more">
            Learn more
          </button>
        </div>

      </div>
    </section>
  );
};

export default ThingsToKnow;