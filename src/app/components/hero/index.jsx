import { DropDownItems } from "./drop_down_items/DropDownItems";
import { BarChart } from "./graph/BarChart";
import { InfoCards } from "./info_cards/InfoCards";
import style from "./style.module.css";

export const HeroSection = () => {
    return (
        <>
        <div className={style["hero-top"]}>
            <DropDownItems><span>Timeframe:<b>All-time</b></span></DropDownItems>
            <DropDownItems><span>People:<b>All</b></span></DropDownItems>
            <DropDownItems><span>Topic:<b>All</b></span></DropDownItems>
        </div>
        <div className={style["hero-main"]}>
            <InfoCards />
            <BarChart />
        </div>
        </>
    )
}

