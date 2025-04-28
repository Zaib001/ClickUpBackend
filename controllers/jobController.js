import Job from "../models/Job.js";
import { calculateSummary } from "../utils/calculateSummary.js";

export const createJob = async (req, res, next) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json({ success: true, data: job });
  } catch (error) {
    next(error);
  }
};

export const getAllJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    const summary = calculateSummary(jobs);
    res.status(200).json({ success: true, data: { jobs, summary } });
  } catch (error) {
    next(error);
  }
};
