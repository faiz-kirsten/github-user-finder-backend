import style from "./UserProfile.module.css";

const UserProfile = (userInfo) => {
    return (
        <section className={style.profileContainer}>
            <img
                src={userInfo.userInfo.avatar_url}
                alt=""
                className={style.profileImg}
            />
            <div className={style.userInformation}>
                <div className={style.information}>
                    <span className={style.title}>Name: </span>
                    <span>
                        {userInfo.userInfo.name !== null &&
                        userInfo.userInfo.name !== ""
                            ? userInfo.userInfo.name
                            : "No name"}
                    </span>
                </div>
                <div className={style.information}>
                    <span className={style.title}>Bio: </span>
                    <p>
                        {userInfo.userInfo.bio !== null &&
                        userInfo.userInfo.bio !== ""
                            ? userInfo.userInfo.bio
                            : "No bio"}
                    </p>
                </div>
                <div className={style.information}>
                    <span className={style.title}>URL: </span>
                    <a
                        href={userInfo.userInfo.html_url}
                        target="_blank"
                        rel="noreferrer">
                        {userInfo.userInfo.html_url}
                    </a>
                </div>
                <div className={style.information}>
                    <span className={style.title}>Blog: </span>
                    <span>
                        {userInfo.userInfo.blog !== null &&
                        userInfo.userInfo.blog !== "" ? (
                            <a
                                href={userInfo.userInfo.blog}
                                target="_blank"
                                rel="noreferrer">
                                {userInfo.userInfo.blog}
                            </a>
                        ) : (
                            "No blog specified"
                        )}
                    </span>
                </div>
                <div className={style.information}>
                    <span className={style.title}>Email: </span>
                    <span>
                        {userInfo.userInfo.email !== null
                            ? userInfo.userInfo.email
                            : "No email specified"}
                    </span>
                </div>
                <div className={style.information}>
                    <span className={style.title}>Company: </span>
                    <span>
                        {userInfo.userInfo.company !== null
                            ? userInfo.userInfo.company
                            : "No company specified"}
                    </span>
                </div>
                <div className={style.information}>
                    <span className={style.title}>Public Repositories: </span>
                    <span>
                        {userInfo.userInfo.public_repos !== 0
                            ? userInfo.userInfo.public_repos
                            : "No public repositories"}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;
