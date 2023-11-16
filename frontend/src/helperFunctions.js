export const combineReposAndCommits = (userRepos, userRepoCommits) => {
    // the  variables 'userRepos' and 'userRepoCommits' are used
    // 'userRepos' is mapped through and for each repo a new key/value pair is added which is 'commits'
    // The value of it is retrieved by using find() to find the 'repo' with the same name as the 'repoCommits' name
    return userRepos.map((repo) => ({
        ...repo,
        commits: userRepoCommits.find(
            (repoCommits) => repoCommits.name === repo.name
        ).commits
            ? userRepoCommits.find(
                  (repoCommits) => repoCommits.name === repo.name
              ).commits
            : {},
    }));
};
