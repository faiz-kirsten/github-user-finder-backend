import styles from "./App.module.css"; // using modules for css helps with avoiding the need for class namespaces by generating a unique class name using a hashing algorithm
import { useState } from "react";
// just for use while no wifi avaiable

// import components
import Search from "../components/Search/Search";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import UserProfile from "../components/UserProfile/UserProfile";
import UserRepo from "../components/UserRepos/UserRepos";
import Loading from "../components/Loading/Loading";
import { combineReposAndCommits } from "../helperFunctions";

const App = () => {
    // Declare global state variables
    const [username, setUsername] = useState(""); // Stores username entered by user
    const [userInfoRetrieved, setUserInfoRetrieved] = useState(); // Stores true or false if the user info was retrieved
    const [userInfo, setUserInfo] = useState([]); // Stores the user's information
    const [userRepos, setUserRepos] = useState([]); // Stores 5 repositories of the user
    const [userRepoCommits, setUserRepoCommmits] = useState([]); // Stores the last 5 commits of each of the repos that are stored in 'userRepos'
    const [userReposAndCommits, setUserReposAndCommits] = useState([]); // Stores both 'userRepos' and 'userRepoCommits' in an array of newly created objects
    const [reposCount, setReposCount] = useState(0); // Stores the number of repos retrieved from the API
    const [reposLoaded, setReposLoaded] = useState(); // Controls whether the function to combine the repos should be called
    const [loading, setLoading] = useState(); // Stores the loading state
    const [noRepos, setNoRepos] = useState(); // Sets whether no repos were retrieved

    // Get the user information from the API
    const fetchUserInfo = async (username) => {
        try {
            const response = await fetch(`/user/${username}`);
            // If the response is not valid, set the state variables below
            if (!response.ok) {
                setUserInfoRetrieved(false);
                setLoading(false);
            }
            if (!response.ok) throw Error("Did not receive expected data.");

            const data = await response.json();

            setUserInfo(data);
            setUserInfoRetrieved(true);
        } catch (err) {
            console.log(err);
        }
    };

    // Fetch the user repos
    const fetchUserRepos = async (username) => {
        try {
            const response = await fetch(`/user/${username}/repos`);
            if (!response.ok) throw Error("Did not receive expected data.");

            const data = await response.json();

            if (data.length === 0 || data === undefined || data === null) {
                setNoRepos(true);
                setLoading(false);
                return;
            }

            // get 5 repos
            const updatedData = data.filter((element, index) => index < 5);

            // Fetch commits for the top 5 repos
            updatedData.forEach((repo) =>
                fetchRepoCommits(username, repo.name)
            );

            setReposCount(updatedData.length);
            setUserRepos(updatedData);
        } catch (err) {
            console.log(err);
        }
    };

    // Fetch individual commits for a repository
    const fetchRepoCommits = async (username, reponame) => {
        try {
            const response = await fetch(
                `/user/${username}/repos/${reponame}/commits`
            );

            if (!response.ok) throw Error("Did not receive expected data.");
            const data = await response.json();

            // console.log(data);
            // Extract the last 5 commits for the repositor
            const updatedData = data.filter((repoCommits, index) => index < 5);
            // Add repo name and commits as an object to userRepoCommits

            setUserRepoCommmits((prevArray) => [
                ...prevArray,
                { name: reponame, commits: updatedData },
            ]);
        } catch (err) {
            console.log(err);
        }
    };

    // Combine repositories and their commits into a single array of objects
    const callCombineReposAndCommits = (userRepos, userRepoCommits) => {
        const reposAndCommits = combineReposAndCommits(
            userRepos,
            userRepoCommits
        );

        setUserReposAndCommits(reposAndCommits);
    };

    // Combine repos and commits if conditions are met
    if (
        reposCount > 0 &&
        userRepoCommits.length === userRepos.length &&
        !reposLoaded
    ) {
        callCombineReposAndCommits(userRepos, userRepoCommits);
        setLoading(false);
        setReposLoaded(true);
    }

    // Handle form submission
    const handleForm = (e) => {
        e.preventDefault();
        // Reset state for variables after user submits a username
        setReposLoaded(false);
        setReposCount(0);
        setUserReposAndCommits([]);
        setUserRepoCommmits([]);
        setUserRepos([]);
        setUserInfoRetrieved();
        setLoading(true);
        setNoRepos();

        // Fetch user information and repos after a delay
        setTimeout(() => {
            fetchUserInfo(username);
            fetchUserRepos(username);
        }, 600);
    };

    return (
        <div>
            <Header />
            <main className={styles.mainContainer}>
                <p className={styles.info}>
                    Enter a valid username to display their profile information
                    and repositories.
                </p>

                <Search handleForm={handleForm} setUsername={setUsername} />

                {loading && <Loading />}

                {userInfoRetrieved === false && (
                    <p className={styles.userNotFound}>
                        Invalid Username! Please enter a valid username.
                    </p>
                )}

                {userInfoRetrieved && (
                    <>
                        <h1>Profile: </h1>
                        <UserProfile userInfo={userInfo} />
                        <h2>Some of their repositories</h2>
                        <UserRepo userReposAndCommits={userReposAndCommits} />
                        {noRepos && <p>No Repos Found</p>}
                    </>
                )}
            </main>
            <Footer />
            <button
                onClick={() => {
                    console.log(userInfo);
                }}>
                Show user info
            </button>
            <button
                onClick={() => {
                    console.log(username);
                }}>
                Show username
            </button>
            <button
                onClick={() => {
                    console.log(userRepos);
                }}>
                Show user repos
            </button>
            <button
                onClick={() => {
                    console.log(userRepoCommits);
                }}>
                Show user repo commits
            </button>
            <button
                onClick={() => {
                    console.log(reposLoaded);
                }}>
                Show user repos loaded
            </button>
            <button
                onClick={() => {
                    console.log(userReposAndCommits);
                }}>
                Show user repos and commits
            </button>
            <button
                onClick={() => {
                    console.log(reposCount);
                }}>
                Show user repos count
            </button>
            <button
                onClick={() => {
                    console.log(loading);
                }}>
                show loading
            </button>
        </div>
    );
};

export default App;

// bodyboost food-quick git-tutorial poised-project-manager portfolio react-hangman react-task-manager
