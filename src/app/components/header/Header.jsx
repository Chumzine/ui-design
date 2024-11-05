import DownloadIcon from "/assets/icons/Download.svg";
import style from "./style.module.css";

export const Header = () => {
    return (
        <div className={style.header}>
            <h3>Reports</h3>
            <div className={style.flex}>
                <img src={DownloadIcon} alt="Download Icon" />
                <p>Download</p>
            </div>
        </div>
    )
}