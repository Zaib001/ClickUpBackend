import express from "express";
import { createJob, getAllJobs } from "../controllers/jobController.js";

const router = express.Router();

router.route("/jobs").post(createJob).get(getAllJobs);

export default router;
