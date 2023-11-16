import express from "express";
import {
    getUserInfo,
    getUserRepos,
    getRepoCommits,
} from "../controllers/user.js"; // import controllers

const router = express.Router();

// get the user information
router.get("/:username", getUserInfo);

// get the user repositories
router.get("/:username/repos", getUserRepos);

// get the repository commits
router.get("/:username/repos/:reponame/commits", getRepoCommits);

export default router;
