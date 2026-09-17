import { useEffect, useState } from "react";

import Header from "../components/Header";
import HeroGallery from "../components/HeroGallery";
import StickyNavbar from "../components/StickyNav";
import PropertyOverview from "../components/PropertyOverview";
import GuestFavourite from "../components/GuestFavourite";
import HostIntro from "../components/HostIntro";
import Highlights from "../components/Highlights";
import Description from "../components/Description";
import SleepingArrangements from "../components/SleepingArrangements";
import Amenities from "../components/Amenities";
import BookingCard from "../components/BookingCard";
import Reviews from "../components/Reviews";
import Location from "../components/Location";
import Host from "../components/Host";
import ThingsToKnow from "../components/ThingsToKnow";
import NearbyListings from "../components/NearbyListings";
import TranslationNotice from "../components/TranslationNotice";
import Calendar from "../components/Calendar";

import { getListing } from "../services/api";
import type { Listing } from "../types/listing";

const LISTING_ID = "6aabef7029f70f1482b5792b";

const ListingPage = () => {
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadListing = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getListing(LISTING_ID);

        setListing(data);
      } catch (error) {
        console.error("Failed to load listing:", error);

        setError("Failed to load listing. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadListing();
  }, []);

  if (loading) {
    return (
      <div className="page-loading">
        Loading listing...
      </div>
    );
  }

  if (error || !listing) {
    return (
      <div className="page-error">
        {error || "Listing not found."}
      </div>
    );
  }

  return (
    <>
      <Header />

      <main>

        {/* PHOTOS */}
        <div id="photos">
          <HeroGallery />
        </div>

        {/* STICKY LISTING NAVBAR */}
        <StickyNavbar />

        {/* MAIN LISTING CONTENT */}
        <div className="listing-content-layout">

          <div className="listing-main-content">

            <PropertyOverview listing={listing} />

            <GuestFavourite listing={listing} />

            <HostIntro listing={listing} />

            <Highlights listing={listing} />

            <TranslationNotice />

            <Description listing={listing} />

            <SleepingArrangements listing={listing} />

            {/* AMENITIES */}
            <div id="amenities">
              <Amenities listing={listing} />
            </div>

            <Calendar />

          </div>

          {/* BOOKING CARD */}
          <aside
            id="booking"
            className="listing-booking-column"
          >
            <BookingCard />
          </aside>

        </div>

        {/* REVIEWS */}
        <div
          id="reviews"
          className="listing-reviews-layout"
        >
          <Reviews listing={listing} />
        </div>

        {/* LOCATION */}
        <div id="location">
          <Location />
        </div>

        {/* HOST */}
        <div className="listing-reviews-layout">
          <Host />
        </div>

        {/* THINGS TO KNOW */}
        <div className="listing-reviews-layout">
          <ThingsToKnow />
        </div>

        {/* NEARBY LISTINGS */}
        <NearbyListings />

      </main>
    </>
  );
};

export default ListingPage;