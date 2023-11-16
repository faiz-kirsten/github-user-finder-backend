import style from "./UserRepo.module.css";

// Output the 'repo' information
const UserRepo = ({ repo }) => {
    return (
        <div className={style.repoContainer}>
            <div className={style.information}>
                <h3>
                    Name:{" "}
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                        {repo.name}
                    </a>
                </h3>
            </div>
            <div className={style.information}>
                <span className={style.title}>Created: </span>
                <span>{repo.created_at.substring(0, 10)}</span>
            </div>
            <div className={style.information}>
                <span className={style.title}>Description: </span>
                <p>
                    {repo.description !== null
                        ? repo.description
                        : "No description"}
                </p>
            </div>
            <div className={style.information}>
                <span className={`${style.title} ${style.commitTitle}`}>
                    Latest Commit(s):
                </span>
                {/* Iterate through the commits and output each of their messages and dates */}
                <div className={style.commits}>
                    {repo.commits.map((commit, i) => (
                        <div key={i} className={style.commit}>
                            <div className={style.commitDateTitle}>
                                {commit.commit.committer.date.substring(0, 10)}
                            </div>
                            <a
                                href={commit.html_url}
                                target="_blank"
                                rel="noreferrer">
                                {commit.commit.message}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserRepo;
