import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <section className="location-section" id="location">
      <h2>Where you'll be</h2>

      <div className="location-info">
        <MapPin size={22} strokeWidth={1.7} />

        <div>
          <strong>Candolim, Goa, India</strong>
          <p>
            The property is located in Candolim, India.
          </p>
        </div>
      </div>

      <div className="map-placeholder">
        <div className="map-grid">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="map-pin">
          <MapPin size={28} fill="currentColor" />
        </div>

        <span className="map-label">Candolim</span>
      </div>
    </section>
  );
};

export default Location;