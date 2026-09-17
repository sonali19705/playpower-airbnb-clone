import {
  Globe,
  Menu,
  Search,
  UserCircle,
} from "lucide-react";

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Logo */}
        <div className="airbnb-logo">
          <span className="airbnb-logo-mark">⌂</span>
          <span className="airbnb-logo-text">airbnb</span>
        </div>

        {/* Search */}
        <div className="header-search">
          <button type="button" className="search-item">
            <span>Anywhere</span>
          </button>

          <div className="search-divider" />

          <button type="button" className="search-item">
            <span>Any week</span>
          </button>

          <div className="search-divider" />

          <button type="button" className="search-item search-guests">
            <span>Add guests</span>
            <span className="search-button">
              <Search size={17} strokeWidth={2.5} />
            </span>
          </button>
        </div>

        {/* Right side */}
        <div className="header-actions">
          <button type="button" className="host-button">
            Airbnb your home
          </button>

          <button
            type="button"
            className="icon-button"
            aria-label="Choose language"
          >
            <Globe size={19} />
          </button>

          <button
            type="button"
            className="profile-button"
            aria-label="Open menu"
          >
            <Menu size={18} />
            <UserCircle size={29} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;