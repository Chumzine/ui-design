import ArrowDownLogo from "/assets/icons/Arrow-Full-Down.svg";
import style from "./style.module.css";

export const DropDownItems = ({children}) => {
    return (
        <div className={style.drop}>
            {children} <img src={ArrowDownLogo} alt="Drop Down Icon" />
        </div>
    )
}