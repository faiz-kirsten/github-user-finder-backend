import UserRepo from "../UserRepo/UserRepo";
import styles from "./UserRepos.module.css";

// create 'UserRepo' components for each iteration in 'userReposAndCommits'
const UserRepos = ({ userReposAndCommits }) => {
    return (
        <section className={styles.reposContainer}>
            {userReposAndCommits.map((repo, i) => (
                <UserRepo key={i} repo={repo} />
            ))}
        </section>
    );
};

export default UserRepos;
