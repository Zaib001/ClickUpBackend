import express from "express";
import {
  createJob,
  getAllJobs,
  resetJobs,
  updateJob,
} from "../controllers/jobController.js";

const router = express.Router();

router.route("/jobs")
  .post(createJob)
  .get(getAllJobs);

router.route("/jobs/reset")
  .delete(resetJobs);

router.route("/jobs/:id")
  .put(updateJob);

export default router;
