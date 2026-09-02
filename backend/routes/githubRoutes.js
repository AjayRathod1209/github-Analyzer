import express from "express";

import {
  getGithubData,
  getContributionAnalysis,
  getAIAnalysis,
} from "../controllers/githubController.js";

const router = express.Router();

// Contribution analysis
router.get("/:username/contributions", getContributionAnalysis);

// AI profile analysis
router.get("/:username/ai-analysis", getAIAnalysis);

// GitHub profile + repositories
router.get("/:username", getGithubData);

export default router;
