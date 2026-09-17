import mongoose, { Document, Schema } from "mongoose";

export interface IAvailability extends Document {
  listingId: mongoose.Types.ObjectId;
  date: string;
  available: boolean;
}

const availabilitySchema = new Schema<IAvailability>(
  {
    listingId: {
      type: Schema.Types.ObjectId,
      ref: "Listing",
      required: true,
      index: true,
    },

    date: {
      type: String,
      required: true,
    },

    available: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

availabilitySchema.index(
  { listingId: 1, date: 1 },
  { unique: true }
);

export const Availability = mongoose.model<IAvailability>(
  "Availability",
  availabilitySchema
);