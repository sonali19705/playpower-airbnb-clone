import express from "express";
import cors from "cors";
import listingRoutes from "./routes/listingRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import availabilityRoutes from "./routes/availabilityRoutes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json());

app.use("/api/listings", listingRoutes);
app.use("/api/listings", reviewRoutes);
app.use("/api/listings", availabilityRoutes);

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "PlayPower Airbnb API is running",
  });
});

export default app;