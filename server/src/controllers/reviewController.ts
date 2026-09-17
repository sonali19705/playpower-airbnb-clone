import { Request, Response } from "express";
import { getReviewsByListingId } from "../services/reviewService.js";

export const getReviews = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reviews = await getReviewsByListingId(
      String(req.params.listingId)
    );

    if (reviews === null) {
      res.status(400).json({
        success: false,
        message: "Invalid listing ID",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch reviews",
    });
  }
};