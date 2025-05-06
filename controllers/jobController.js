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
export const resetJobs = async (req, res, next) => {
  try {
    await Job.deleteMany({});
    res.status(200).json({ success: true, message: "All jobs have been reset." });
  } catch (error) {
    next(error);
  }
};

export const updateJob = async (req, res, next) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedJob) {
      return res.status(404).json({ success: false, message: "Job not found." });
    }

    res.status(200).json({ success: true, data: updatedJob });
  } catch (error) {
    next(error);
  }
};

