module.exports = {
  baseBranch: "master",
  plugins: [
    "npm",
    "gh-action-toggle-peer-review",
    "conventional-commits",
    "first-time-contributor",
    "all-contributors",
    "released",
  ],
  prereleaseBranches: ["next", "alpha", "beta"],
};
