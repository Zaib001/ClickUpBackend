import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  payment: { type: Number, required: true },
  fuelCost: { type: Number, required: true },
  miscCost: { type: Number, required: true },
  wageCost: { type: Number, required: true },
  drivingTime: { type: Number, required: true },
  worksiteTime: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Job", JobSchema);
