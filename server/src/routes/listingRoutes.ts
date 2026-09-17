import { Router } from "express";
import { getListing } from "../controllers/listingController.js";

const router = Router();

router.get("/:id", getListing);

export default router;