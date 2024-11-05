import { useSelector } from 'react-redux';
import style from './cards.module.css';


export function InfoCards() {
    const cards= useSelector((state) => state.card.cards)
    return (
        <div className={style.container}>
            {
                cards?.map((item) => (
                    <div key={item?.title} className={style.cards}>
                        <h5>{item?.title}</h5>
                        <p>{item?.value}</p>
                        {item?.graph && (
                            <img src={item?.graph} alt="Graph" />
                        )}
                    </div>
                ))
            }
        </div>
    )
}
