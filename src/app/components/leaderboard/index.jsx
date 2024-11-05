import { useSelector } from "react-redux";
import style from "./style.module.css";

export function LeaderBoard({type}) {
    const leaderboard = useSelector((state) => state.leaderboard.items);

    const filteredLeaders = leaderboard?.filter((item) => item?.type === type);

    const headerText = type === "user" ? "User Leaderboard" : "Groups Leaderboard";

    return (
        <div className={style.container}>
            <h3>{headerText}</h3>
            {
                filteredLeaders.map((item, index) => (
                    <div key={item?.rank} className={style["leader-item"]}>
                        <div className={style["leader-details"]}>
                            {item?.imgSrc && (
                                <img src={item?.imgSrc} alt={item?.leader} className={style["leader-image"]} />
                            )}
                            <div className={style.score}>
                                <h3>{item?.leader}</h3>
                                <p>{item?.score}</p>
                            </div>
                        </div>
                        <div className={style.ranking}>
                            <p>{item?.rank}</p>
                            <span><img src={item?.arrow} alt="Arrow" /></span>
                        </div>
                    </div>
                ))  
            }
        </div>
    )
}
