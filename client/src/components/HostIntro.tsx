import { UserRound } from "lucide-react";
import type { Listing } from "../types/listing";

interface HostIntroProps {
  listing: Listing;
}

const HostIntro = ({ listing }: HostIntroProps) => {
  return (
    <section className="host-intro">
      <div className="host-intro-avatar">
        {listing.host.image ? (
          <img
            src={listing.host.image}
            alt={`${listing.host.name} profile`}
          />
        ) : (
          <UserRound size={30} strokeWidth={1.5} />
        )}
      </div>

      <div className="host-intro-content">
        <h2>Hosted by {listing.host.name}</h2>

        <p>
          {listing.host.yearsHosting} years hosting
        </p>
      </div>
    </section>
  );
};

export default HostIntro;