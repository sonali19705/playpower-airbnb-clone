import { Request, Response } from "express";
import { getAvailabilityByListingId } from "../services/availabilityService.js";

export const getAvailability = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const availability = await getAvailabilityByListingId(
      String(req.params.listingId)
    );

    if (availability === null) {
      res.status(400).json({
        success: false,
        message: "Invalid listing ID",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: availability,
    });
  } catch (error) {
    console.error("Error fetching availability:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch availability",
    });
  }
};