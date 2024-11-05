import { SideNav } from "../components/side_panel/SideNav";
import { Header } from "../components/header/Header";
import { HeroSection } from "../components/hero";
import { LeaderBoard } from "../components/leaderboard";
import { TopicComponents } from "../components/ratings/Topic";
import style from "./style.module.css";

export const Report = () => {
    return (
        <div className={style['main-display']}>
            <SideNav />
            <main>
                <div>
                    <Header />
                    <HeroSection />
                </div>
                <div className={style.topic}>
                    <TopicComponents type="weakest" />
                    <TopicComponents type="strongest" />
                </div>
                <div className={style.leader}>
                    <LeaderBoard type="user" />
                    <LeaderBoard type="groups" />
                </div>
            </main>
        </div>
    )
}