import mongoose from "mongoose";
import { Listing } from "../models/Listing.js";

export const getListingById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }

  return Listing.findById(id).lean();
};