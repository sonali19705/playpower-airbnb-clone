import {
  GraduationCap,
  Shield,
  UserRound,
} from "lucide-react";

const Host = () => {
  const coHosts = [
    { name: "Sharath", image: "" },
    { name: "Aman Dev Pahwa", image: "" },
    { name: "Maria Karen Priyanka", image: "" },
    { name: "Simran", image: "" },
    { name: "Pallavi", image: "" },
    { name: "Sanyukta", image: "" },
    { name: "Shruti", image: "" },
    { name: "Amisha", image: "" },
  ];

  return (
    <section className="host-section">
      <h2 className="host-title">Meet your host</h2>

      <div className="host-layout">
        {/* LEFT SIDE */}
        <div className="host-left">

          <div className="host-profile-card">

            <div className="host-profile-main">
              <div className="host-logo">
                <span>MIRASHYA</span>
                <small>HOMES</small>
              </div>

              <h3>Mirashya</h3>
              <h3>Homes</h3>

              <p>Host</p>
            </div>

            <div className="host-profile-stats">

              <div className="host-stat">
                <strong>1,463</strong>
                <span>Reviews</span>
              </div>

              <div className="host-stat">
                <strong>4.68★</strong>
                <span>Rating</span>
              </div>

              <div className="host-stat">
                <strong>2</strong>
                <span>Years hosting</span>
              </div>

            </div>
          </div>

          <div className="host-personal-info">

            <div className="host-personal-item">
              <UserRound size={24} strokeWidth={1.5} />
              <span>Born in the 80s</span>
            </div>

            <div className="host-personal-item">
              <GraduationCap size={25} strokeWidth={1.5} />
              <span>Where I went to school: NICMAR GOA</span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="host-right">

          <h3 className="cohosts-title">Co-Hosts</h3>

          <div className="cohosts-grid">
            {coHosts.map((coHost) => (
              <div className="cohost-item" key={coHost.name}>

                {coHost.image ? (
                  <img
                    src={coHost.image}
                    alt=""
                    className="cohost-avatar"
                  />
                ) : (
                  <div className="cohost-placeholder">
                    {coHost.name.charAt(0)}
                  </div>
                )}

                <span>{coHost.name}</span>
              </div>
            ))}
          </div>

          <h3 className="host-details-title">
            Host details
          </h3>

          <div className="host-details">
            <p>Response rate: 100%</p>
            <p>Responds within an hour</p>
          </div>

          <button
            type="button"
            className="message-host-button"
          >
            Message host
          </button>

          <div className="host-payment-note">
            <Shield size={27} strokeWidth={1.5} />

            <span>
              To help protect your payment, always use Airbnb
              to send money and communicate with hosts.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Host;