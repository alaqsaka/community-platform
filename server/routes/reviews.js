import express from "express";
import { createReview, getReviews } from "../controllers/reviews.js";

const router = express.Router();

// localhost:5000/reviews
router.get("/", getReviews);
router.post("/", createReview);

export default router;
