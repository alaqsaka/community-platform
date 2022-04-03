import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  review: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
