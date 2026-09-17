import "dotenv/config";
import mongoose from "mongoose";
import { connectDatabase } from "../config/database.js";
import { Listing } from "../models/Listing.js";
import { Review } from "../models/Review.js";

const seedDatabase = async (): Promise<void> => {
    try {
        await connectDatabase();

        await Listing.deleteMany({});
        await Review.deleteMany({});

        const listing = await Listing.create({
            title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",

            location: "Candolim, India",

            propertyType: "Entire serviced apartment",

            guests: 3,
            bedrooms: 1,
            beds: 1,
            bathrooms: 1,

            rating: 4.95,
            reviewCount: 19,

            pricePerNight: 5699,
            currency: "INR",

            description:
                "A beautiful and comfortable stay in Candolim with a romantic jacuzzi and modern amenities.",

            images: [],

            highlights: [
                {
                    title: "Outdoor entertainment",
                    description:
                        "The pool and alfresco dining are great for summer trips.",
                    icon: "outdoor-entertainment",
                },
                {
                    title: "Designed for staying cool",
                    description:
                        "Beat the heat with the A/C and ceiling fan.",
                    icon: "cool",
                },
                {
                    title: "Self check-in",
                    description:
                        "You can check in with the building staff.",
                    icon: "self-check-in",
                },
            ],

            sleepingArrangements: [
                {
                    name: "Bedroom",
                    description: "1 bed",
                    image: "",
                },
                {
                    name: "Living room",
                    description: "1 sofa",
                    image: "",
                },
            ],

            amenities: [
                {
                    name: "Wi-Fi",
                    available: true,
                    icon: "wifi",
                },
                {
                    name: "Air conditioning",
                    available: true,
                    icon: "air-vent",
                },
                {
                    name: "TV",
                    available: true,
                    icon: "tv",
                },
                {
                    name: "Pool",
                    available: true,
                    icon: "waves",
                },
                {
                    name: "Gym",
                    available: true,
                    icon: "dumbbell",
                },
                {
                    name: "Free parking",
                    available: true,
                    icon: "parking",
                },
                {
                    name: "Kitchen",
                    available: true,
                    icon: "flame",
                },
            ],

            host: {
                name: "Mirashya Homes",
                image: "/images/host.png",
                yearsHosting: 2,
                responseRate: "100%",
                responseTime: "within an hour",
            },

            photoCategories: [],

            nearbyListings: [],
        });

        // ==========================================
        // REVIEWS
        // ==========================================

        await Review.insertMany([
            {
                listingId: listing._id,

                user: {
                    name: "Amit",
                    avatar: "/images/default-avatar.png",
                    location: "India",
                },

                rating: 5,
                date: "1 week ago",

                text:
                    "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
            },

            {
                listingId: listing._id,

                user: {
                    name: "Aheesh",
                    avatar: "/images/default-avatar.png",
                    location: "India",
                },

                rating: 5,
                date: "2 weeks ago",

                text:
                    "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful.",
            },

            {
                listingId: listing._id,

                user: {
                    name: "Samiksha",
                    avatar: "/images/default-avatar.png",
                    location: "India",
                },

                rating: 5,
                date: "May 2026",

                text:
                    "The host nitish was really great help",
            },

            {
                listingId: listing._id,

                user: {
                    name: "Vedant",
                    avatar: "/images/default-avatar.png",
                    location: "India",
                },

                rating: 5,
                date: "May 2026",

                text:
                    "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived.",
            },

            {
                listingId: listing._id,

                user: {
                    name: "Vaibhav S",
                    avatar: "/images/default-avatar.png",
                    location: "India",
                },

                rating: 5,
                date: "May 2026",

                text:
                    "Great great experience living out there, can't expect more, will always look for it in the future and will recommend my friends too.",
            },

            {
                listingId: listing._id,

                user: {
                    name: "Mohd",
                    avatar: "/images/default-avatar.png",
                    location: "India",
                },

                rating: 5,
                date: "May 2026",

                text:
                    "Great place. Exactly as described in the listing.",
            },
        ]);

        console.log("Listing seeded successfully:");
        console.log(listing._id);

        console.log("Reviews seeded successfully: 6");

        await mongoose.connection.close();

        console.log("Database connection closed.");
    } catch (error) {
        console.error("Seeding failed:", error);

        await mongoose.connection.close();

        process.exit(1);
    }
};
seedDatabase();