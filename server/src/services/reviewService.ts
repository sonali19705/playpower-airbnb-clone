import mongoose from "mongoose";
import { Review } from "../models/Review.js";

export const getReviewsByListingId = async (listingId: string) => {
  if (!mongoose.Types.ObjectId.isValid(listingId)) {
    return null;
  }

  return Review.find({ listingId })
    .sort({ createdAt: -1 })
    .lean();
};