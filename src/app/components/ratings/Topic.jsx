import { useSelector } from "react-redux";
import { ProgressBar } from "./ProgressBar";
import style from "./style.module.css";


export function TopicComponents ({type}) {
    const topics = useSelector((state) => state.topic.topics);

    const filteredTopics = topics?.filter((item) => item.type === type);

    const headerText = type === "weakest" ? "Weakest Topics" : "Strongest Topics";

    return (
        <div className={style.container}>
            <h3>{headerText}</h3>
            {
                filteredTopics?.map((item)=> (
                    <div key={item?.title} className={style["topic-item"]}>
                        <img src={item.imgSrc} alt={item.title} className={style["topic-image"]} />
                        <div className={style["topic-details"]}>
                            <h5>{item.title}</h5>
                            <div className={style["progress-container"]}>
                                <ProgressBar value={item.value} type={type} />
                            </div>
                        </div>
                        <div className={style["value-rating"]}>
                            <p>{item.value}</p>
                            <span>{item.rating}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}