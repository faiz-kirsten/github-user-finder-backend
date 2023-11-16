import styles from "./Header.module.css";
import { MdPersonSearch } from "react-icons/md";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <MdPersonSearch className={styles.logoIcon} />
                <span>
                    GitHub{" "}
                    <span style={{ color: "royalblue" }}>UserFinder</span>
                </span>
            </div>
        </header>
    );
};

export default Header;
