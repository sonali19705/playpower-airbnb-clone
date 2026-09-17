export interface Host {
  name: string;
  yearsHosting: number;
  image?: string;
  responseRate?: string;
  responseTime?: string;
}

export interface Highlight {
  title: string;
  description: string;
  icon?: string;
}

export interface SleepingArrangement {
  name: string;
  description: string;
  image: string;
}

export interface Amenity {
  name: string;
  available: boolean;
  icon?: string;
}

export interface PhotoCategory {
  name: string;
  images: string[];
}

export interface NearbyListing {
  title: string;
  image: string;
  price: number;
  rating: number;
}

export interface Listing {
  _id: string;

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

  highlights: Highlight[];

  sleepingArrangements: SleepingArrangement[];

  amenities: Amenity[];

  host: Host;

  photoCategories: PhotoCategory[];

  nearbyListings: NearbyListing[];
}

export interface Review {
  _id: string;
  listingId: string;

  user: {
    name: string;
    avatar: string;
    location?: string;
  };

  rating: number;
  date: string;
  text: string;
}