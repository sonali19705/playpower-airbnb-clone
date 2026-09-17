import { Request, Response } from "express";
import { getListingById } from "../services/listingService.js";

export const getListing = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const listing = await getListingById(String(req.params.id));

    if (!listing) {
      res.status(404).json({
        success: false,
        message: "Listing not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: listing,
    });
  } catch (error) {
    console.error("Error fetching listing:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch listing",
    });
  }
};