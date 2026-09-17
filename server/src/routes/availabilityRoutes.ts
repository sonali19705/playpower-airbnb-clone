import { Router } from "express";
import { getAvailability } from "../controllers/availabilityController.js";

const router = Router();

router.get("/:listingId/availability", getAvailability);

export default router;