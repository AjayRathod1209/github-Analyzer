const BACKEND_API = "https://github-analyzer-6tx9.onrender.com/api/github";

// Get GitHub user profile through our backend
export const getGithubUser = async (username) => {
  const response = await fetch(`${BACKEND_API}/${username}`);

  if (!response.ok) {
    throw new Error("GitHub user not found");
  }

  const data = await response.json();

  if (!data.success) {
    throw new Error("GitHub user not found");
  }

  return data.profile;
};

// Get user's repositories through our backend
export const getGithubRepositories = async (username) => {
  const response = await fetch(`${BACKEND_API}/${username}`);

  if (!response.ok) {
    throw new Error("Repositories could not be fetched");
  }

  const data = await response.json();

  if (!data.success) {
    throw new Error("Repositories could not be fetched");
  }

  return data.repositories;
};

// Get contribution analysis through our backend
export const getGithubContributions = async (username) => {
  const response = await fetch(`${BACKEND_API}/${username}/contributions`);

  if (!response.ok) {
    throw new Error("Contribution data could not be fetched");
  }

  const data = await response.json();

  if (!data.success) {
    throw new Error("Contribution analysis failed");
  }

  return data.contribution;
};
// Get AI GitHub profile analysis
export const getAIAnalysis = async (username) => {
  const response = await fetch(`${BACKEND_API}/${username}/ai-analysis`);

  if (!response.ok) {
    throw new Error("AI analysis could not be fetched");
  }

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || "AI analysis failed");
  }

  return data.analysis;
};
