import mongoose, { Document, Schema } from "mongoose";

export interface IReview extends Document {
  listingId: mongoose.Types.ObjectId;

  user: {
    name: string;
    avatar: string;
    location?: string;
  };

  rating: number;
  date: string;
  text: string;
}

const reviewSchema = new Schema<IReview>(
  {
    listingId: {
      type: Schema.Types.ObjectId,
      ref: "Listing",
      required: true,
      index: true,
    },

    user: {
      name: {
        type: String,
        required: true,
      },

      avatar: {
        type: String,
        required: true,
      },

      location: String,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    date: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Review = mongoose.model<IReview>(
  "Review",
  reviewSchema
);