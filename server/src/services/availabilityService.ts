import mongoose from "mongoose";
import { Availability } from "../models/Availability.js";

export const getAvailabilityByListingId = async (listingId: string) => {
  if (!mongoose.Types.ObjectId.isValid(listingId)) {
    return null;
  }

  return Availability.find({ listingId })
    .sort({ date: 1 })
    .lean();
};