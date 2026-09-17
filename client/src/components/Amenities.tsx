import { useState } from "react";
import {
  Wifi,
  AirVent,
  Tv,
  Waves,
  Dumbbell,
  CarFront,
  ChefHat,
  Wind,
  Bath,
  ShowerHead,
  WashingMachine,
  Shirt,
  BedDouble,
  Monitor,
  Coffee,
  Microwave,
  Refrigerator,
  Utensils,
  CircleParking,
  ShieldCheck,
  Siren,
  Baby,
  Sparkles,
  DoorOpen,
  LockKeyhole,
  TreePine,
  Sun,
  Armchair,
  Fan,
  LampDesk,
  Luggage,
  KeyRound,
  Building2,
  Accessibility,
  Package,
  Cigarette,
  CircleAlert,
  Waves as HotTubIcon,
  Dumbbell as FitnessIcon,
} from "lucide-react";

import type { Listing } from "../types/listing";

interface AmenitiesProps {
  listing: Listing;
}

interface ModalAmenity {
  name: string;
  icon: typeof Wifi;
  unavailable?: boolean;
}

const allAmenities: {
  category: string;
  items: ModalAmenity[];
}[] = [
    {
      category: "Bathroom",
      items: [
        { name: "Hairdryer", icon: Wind },
        { name: "Cleaning products", icon: Sparkles },
        { name: "Shampoo", icon: Bath },
        { name: "Hot water", icon: ShowerHead },
        { name: "Shower gel", icon: ShowerHead },
      ],
    },

    {
      category: "Bedroom and laundry",
      items: [
        { name: "Washing machine", icon: WashingMachine },
        { name: "Hangers", icon: Shirt },
        { name: "Bed linen", icon: BedDouble },
        { name: "Extra pillows and blankets", icon: BedDouble },
        { name: "Clothing storage", icon: Shirt },
        { name: "Iron", icon: Shirt },
      ],
    },

    {
      category: "Entertainment",
      items: [
        { name: "TV", icon: Tv },
        { name: "Books and reading material", icon: Monitor },
        { name: "Sound system", icon: Tv },
      ],
    },

    {
      category: "Heating and cooling",
      items: [
        { name: "Air conditioning", icon: AirVent },
        { name: "Ceiling fan", icon: Fan },
        { name: "Portable fans", icon: Wind },
      ],
    },

    {
      category: "Home safety",
      items: [
        { name: "Smoke alarm", icon: Siren, unavailable: true },
        {
          name: "Carbon monoxide alarm",
          icon: CircleAlert,
          unavailable: true,
        },
        { name: "Fire extinguisher", icon: CircleAlert },
        { name: "First aid kit", icon: ShieldCheck },
      ],
    },

    {
      category: "Internet and office",
      items: [
        { name: "Wi-Fi", icon: Wifi },
        { name: "Dedicated workspace", icon: LampDesk },
        { name: "Desk", icon: LampDesk },
      ],
    },

    {
      category: "Kitchen",
      items: [
        { name: "Kitchen", icon: ChefHat },
        { name: "Refrigerator", icon: Refrigerator },
        { name: "Microwave", icon: Microwave },
        { name: "Coffee maker", icon: Coffee },
        { name: "Cooking basics", icon: Utensils },
        { name: "Dining table", icon: Utensils },
        { name: "Dishes and silverware", icon: Utensils },
      ],
    },

    {
      category: "Parking and facilities",
      items: [
        { name: "Free parking on premises", icon: CarFront },
        { name: "Pool", icon: Waves },
        { name: "Gym", icon: FitnessIcon },
        { name: "Hot tub", icon: HotTubIcon },
        { name: "Elevator", icon: Building2 },
        { name: "Free street parking", icon: CircleParking },
      ],
    },

    {
      category: "Services",
      items: [
        { name: "Luggage drop-off allowed", icon: Luggage },
        { name: "Long-term stays allowed", icon: Building2 },
        { name: "Self check-in", icon: KeyRound },
      ],
    },

    {
      category: "Outdoor",
      items: [
        { name: "Patio or balcony", icon: Sun },
        { name: "Outdoor furniture", icon: Armchair },
        { name: "Garden", icon: TreePine },
        { name: "Outdoor dining area", icon: Utensils },
      ],
    },

    {
      category: "Accessibility",
      items: [
        { name: "Step-free entrance", icon: Accessibility },
        { name: "Wide entrance", icon: DoorOpen },
      ],
    },

    {
      category: "Family",
      items: [
        { name: "High chair", icon: Baby },
        { name: "Children's books and toys", icon: Baby },
      ],
    },

    {
      category: "Additional amenities",
      items: [
        { name: "Private entrance", icon: DoorOpen },
        { name: "Lockbox", icon: LockKeyhole },
        { name: "Towels", icon: Bath },
        { name: "Body soap", icon: ShowerHead },
        { name: "Toiletries", icon: Package },
        { name: "No smoking", icon: Cigarette },
      ],
    },
  ];

const Amenities = ({ listing }: AmenitiesProps) => {
  const [showAll, setShowAll] = useState(false);

  const getIcon = (name: string) => {
    const value = name.toLowerCase();

    if (value.includes("wi-fi") || value.includes("wifi")) return Wifi;
    if (value.includes("air conditioning")) return AirVent;
    if (value === "tv") return Tv;
    if (value === "pool") return Waves;
    if (value === "gym") return Dumbbell;
    if (value.includes("parking")) return CarFront;
    if (value.includes("kitchen")) return ChefHat;

    return null;
  };

  return (
    <section className="amenities-section">
      <h2>What this place offers</h2>

      {/* Main amenities */}
      <div className="amenities-grid">
        {listing.amenities.map((amenity, index) => {
          const Icon = getIcon(amenity.name);

          return (
            <div
              className={`amenity-item ${!amenity.available ? "amenity-unavailable" : ""
                }`}
              key={`${amenity.name}-${index}`}
            >
              <span className="amenity-icon">
                {Icon && <Icon size={26} strokeWidth={1.6} />}
              </span>

              <span>{amenity.name}</span>
            </div>
          );
        })}
      </div>

      {/* Show all 50 */}
      <button
        type="button"
        className="amenities-button"
        onClick={() => setShowAll(true)}
      >
        Show all 50 amenities
      </button>

      {/* Modal */}
      {showAll && (
        <div
          className="amenities-modal-backdrop"
          onClick={() => setShowAll(false)}
        >
          <div
            className="amenities-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="amenities-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="amenities-modal-close"
              onClick={() => setShowAll(false)}
              aria-label="Close amenities"
            >
              ×
            </button>

            <div className="amenities-modal-content">
              <h2 id="amenities-modal-title">What this place offers</h2>

              {allAmenities.map((category) => (
                <section
                  className="amenities-modal-group"
                  key={category.category}
                >
                  <h3>{category.category}</h3>

                  {category.items.map((amenity) => {
                    const Icon = amenity.icon;

                    return (
                      <div
                        className={`amenities-modal-item ${amenity.unavailable
                            ? "amenity-unavailable"
                            : ""
                          }`}
                        key={amenity.name}
                      >
                        <span className="amenity-icon">
                          <Icon size={24} strokeWidth={1.6} />
                        </span>

                        <span>{amenity.name}</span>
                      </div>
                    );
                  })}
                </section>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Amenities;