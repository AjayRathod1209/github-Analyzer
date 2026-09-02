import {
  getGithubProfile,
  getGithubRepositories,
  getRepositoryCommits,
  getContributionActivity,
} from "../services/githubService.js";

import { generateGithubAnalysis } from "../services/aiService.js";

// Get GitHub profile + repositories
export const getGithubData = async (req, res) => {
  try {
    const { username } = req.params;

    if (!username) {
      return res.status(400).json({
        success: false,
        message: "Username is required",
      });
    }

    const [profile, repositories] = await Promise.all([
      getGithubProfile(username),
      getGithubRepositories(username),
    ]);

    res.json({
      success: true,
      profile,
      repositories,
    });
  } catch (error) {
    console.error("GitHub API Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get contribution analysis
export const getContributionAnalysis = async (req, res) => {
  try {
    const { username } = req.params;

    if (!username) {
      return res.status(400).json({
        success: false,
        message: "Username is required",
      });
    }

    const contribution = await buildContributionAnalysis(username);

    res.json({
      success: true,
      username,
      contribution,
    });
  } catch (error) {
    console.error("Contribution Analysis Error:", error);

    res.status(500).json({
      success: false,
      message: "Contribution analysis failed",
    });
  }
};

// Get AI-powered GitHub analysis
export const getAIAnalysis = async (req, res) => {
  try {
    const { username } = req.params;

    if (!username) {
      return res.status(400).json({
        success: false,
        message: "Username is required",
      });
    }

    console.log(`🤖 Starting AI analysis for: ${username}`);

    // Get profile + repositories
    const [profile, repositories] = await Promise.all([
      getGithubProfile(username),
      getGithubRepositories(username),
    ]);

    // Get contribution information
    const contribution = await buildContributionAnalysis(
      username,
      repositories,
    );

    // Send GitHub data to AI
    const analysis = await generateGithubAnalysis({
      profile,
      repositories,
      contribution,
    });

    res.json({
      success: true,
      username,
      analysis,
    });
  } catch (error) {
    console.error("AI Analysis Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "AI analysis failed",
    });
  }
};

// Build contribution analysis
const buildContributionAnalysis = async (username, repositories = null) => {
  // If repositories were not already provided, fetch them
  if (!repositories) {
    repositories = await getGithubRepositories(username);
  }

  // Only user's own repositories
  const ownedRepositories = repositories.filter((repo) => !repo.fork);

  // Analyze latest 10 repositories
  const repositoriesToAnalyze = ownedRepositories.slice(0, 10);

  let totalCommits = 0;
  let bestContribution = null;

  // Calculate commits
  for (const repository of repositoriesToAnalyze) {
    const commits = await getRepositoryCommits(username, repository.name);

    // Only count commits made by requested user
    const userCommits = commits.filter(
      (commit) =>
        commit.author?.login?.toLowerCase() === username.toLowerCase(),
    );

    const commitCount = userCommits.length;

    totalCommits += commitCount;

    // Find repository with highest contribution
    if (!bestContribution || commitCount > bestContribution.commits) {
      bestContribution = {
        name: repository.name,
        commits: commitCount,
        url: repository.html_url,
      };
    }
  }

  // Get date-wise contribution activity
  const activity = await getContributionActivity(
    username,
    repositoriesToAnalyze,
  );

  return {
    totalCommits,
    repositoriesAnalyzed: repositoriesToAnalyze.length,
    bestContribution,
    activity,
  };
};
