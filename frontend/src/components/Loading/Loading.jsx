import styles from "./Loading.module.css";
import { VscLoading } from "react-icons/vsc";

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <VscLoading className={styles.loadingIcon} />
            <p className={styles.loadingText}>Loading</p>
        </div>
    );
};

export default Loading;
