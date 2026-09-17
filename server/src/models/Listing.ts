import mongoose, { Document, Schema } from "mongoose";

export interface IListing extends Document {
  title: string;
  location: string;

  propertyType: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;

  rating: number;
  reviewCount: number;

  pricePerNight: number;
  currency: string;

  description: string;

  images: string[];

  highlights: {
    title: string;
    description: string;
    icon?: string;
  }[];

  sleepingArrangements: {
    name: string;
    description: string;
    image: string;
  }[];

  amenities: {
    name: string;
    available: boolean;
    icon?: string;
  }[];

  host: {
    name: string;
    image: string;
    yearsHosting: number;
    responseRate?: string;
    responseTime?: string;
  };

  photoCategories: {
    name: string;
    images: string[];
  }[];

  nearbyListings: {
    title: string;
    image: string;
    price: number;
    rating: number;
  }[];
}

const listingSchema = new Schema<IListing>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    propertyType: {
      type: String,
      required: true,
    },

    guests: {
      type: Number,
      required: true,
      min: 1,
    },

    bedrooms: {
      type: Number,
      required: true,
      min: 0,
    },

    beds: {
      type: Number,
      required: true,
      min: 0,
    },

    bathrooms: {
      type: Number,
      required: true,
      min: 0,
    },

    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },

    reviewCount: {
      type: Number,
      required: true,
      min: 0,
    },

    pricePerNight: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      default: "INR",
    },

    description: {
      type: String,
      required: true,
    },

    images: {
      type: [String],
      default: [],
    },

    highlights: {
      type: [
        {
          title: String,
          description: String,
          icon: String,
        },
      ],
      default: [],
    },

    sleepingArrangements: {
      type: [
        {
          name: String,
          description: String,
          image: String,
        },
      ],
      default: [],
    },

    amenities: {
      type: [
        {
          name: String,
          available: Boolean,
          icon: String,
        },
      ],
      default: [],
    },

    host: {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: false,
      },
      yearsHosting: {
        type: Number,
        required: true,
      },
      responseRate: String,
      responseTime: String,
    },

    photoCategories: {
      type: [
        {
          name: String,
          images: [String],
        },
      ],
      default: [],
    },

    nearbyListings: {
      type: [
        {
          title: String,
          image: String,
          price: Number,
          rating: Number,
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const Listing = mongoose.model<IListing>(
  "Listing",
  listingSchema
);