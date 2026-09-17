import { useEffect, useState } from "react";

const StickyNavbar = () => {
  const [active, setActive] = useState("photos");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const photos = document.getElementById("photos");

      if (!photos) return;

      // Show navbar only after the photo section has been scrolled past
      setVisible(photos.getBoundingClientRect().bottom <= 0);

      const sections = ["photos", "amenities", "reviews", "location"];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);

        if (section && section.getBoundingClientRect().top <= 150) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goTo = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const navbarHeight = 76;

    window.scrollTo({
      top:
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`listing-sticky-navbar ${
        visible ? "listing-sticky-navbar-visible" : ""
      }`}
    >
      <div className="listing-sticky-inner">

        {/* LEFT */}
        <div className="listing-sticky-left">

          <button
            type="button"
            className={active === "photos" ? "active" : ""}
            onClick={() => goTo("photos")}
          >
            Photos
          </button>

          <button
            type="button"
            className={active === "amenities" ? "active" : ""}
            onClick={() => goTo("amenities")}
          >
            Amenities
          </button>

          <button
            type="button"
            className={active === "reviews" ? "active" : ""}
            onClick={() => goTo("reviews")}
          >
            Reviews
          </button>

          <button
            type="button"
            className={active === "location" ? "active" : ""}
            onClick={() => goTo("location")}
          >
            Location
          </button>

        </div>

        {/* RIGHT */}
        <div className="listing-sticky-right">

          <div className="listing-sticky-price">
            <div>
              <strong>₹28,499</strong>
              <span> for 5 nights</span>
            </div>

            <div className="listing-sticky-rating">
              ★ 4.95 · 19 reviews
            </div>
          </div>

          <button
            type="button"
            className="listing-sticky-reserve"
            onClick={() => goTo("booking")}
          >
            Reserve
          </button>

        </div>

      </div>
    </nav>
  );
};

export default StickyNavbar;