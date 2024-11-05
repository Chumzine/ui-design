import TESLALogo from "/assets/icons/TESLA.svg";
import { useSelector } from "react-redux";
import style from "./nav.module.css";


export const SideNav = () => {
    const stat = useSelector((state) => state.statNav.data)
    const support = useSelector((state) => state.supportNav.data)

    return (
        <div className={style.sidenav}>
            <div className={style["nav-wrapper"]}>
                <div><img src={TESLALogo} alt="TESLA Logo" /></div>
                <div className={style["top-nav"]}>
                    <nav>
                        <ul>
                            {
                                stat?.map((item, index) => {
                                    return (
                                        <li key={index} className={item.className}>
                                            <img src={item.icon} alt={`${item.title} icon`} />
                                            <span>{item.title}</span>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </nav>
                </div>
                <div className={style["bottom-nav"]}>
                    <p>Support</p>
                    <nav>
                        <ul>
                            {
                                support?.map((item, index) => {
                                    return (
                                        <li key={index} className={item.className}>
                                            <img src={item.icon} alt={`${item.title} icon`} />
                                            <span>{item.title}</span>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </nav>
                </div>   
            </div>
            <div className={style.admin}>
                <img src="/assets/images/Sam.png" alt="Sam Wheeler" />
                <h4>Sam Wheeler</h4>
                <p>samwheeler@example.com</p>
            </div>
        </div>
    )
}