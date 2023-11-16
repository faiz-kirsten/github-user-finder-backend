// get userinfo
export const getUserInfo = async (req, res) => {
    try {
        const { username } = req.params;
        const apiUrl = `https://api.github.com/users/${username}`;

        // set the authorisation key for the api
        const response = await fetch(apiUrl);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`GitHub API Error: ${errorData.message}`);
        }

        // get the data
        const data = await response.json();

        console.log("User info retrieved successfully");
        res.json(data);
    } catch (err) {
        console.error("Error fetching user info from GitHub:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// get user repos
export const getUserRepos = async (req, res) => {
    try {
        const { username } = req.params; // retrieve the request parameters
        const apiUrl = `https://api.github.com/users/${username}/repos`;

        // set the authorisation key for the api
        const response = await fetch(apiUrl);

        // throw an error if response is not valid
        if (!response.ok) throw Error("Did not receive expected data.");

        // get the data
        const data = await response.json();

        console.log("User repos retrieved successfully");
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

// get individual commit repo data
export const getRepoCommits = async (req, res) => {
    try {
        const { username, reponame } = req.params; // retrieve the request parameters
        const apiUrl = `https://api.github.com/repos/${username}/${reponame}/commits`;

        //
        const response = await fetch(apiUrl);

        // throw an error if response is not valid
        if (!response.ok) throw Error("Did not receive expected data.");

        // get the data
        const data = await response.json();
        console.log("User repos commits retrieved successfully");
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};
