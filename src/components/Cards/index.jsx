import { useContext } from "react";
import { Link } from "react-router-dom/dist";
import { DataContext } from "../../context";
import styles from './style.module.css'
export default function Cards(props) {
    // const data = useContext(DataContext)
    { console.log(props.action) }


    return <ul className={styles.listcard}> {props.action.map((i) => {

        return <Link ><li className={styles.card} key={Math.random()}><div className={styles.top}>
            <div className="w110">{i.name}</div><div>bla bla</div></div>
            <div className={styles.name}> {i.lecturer}</div>
            <div className={styles.bottun}>
                <div>{`${props.action[0].endTime}-${props.action[0].startTime}`}</div>
                {/* <div> {`${i.startDate.toLocaleDateString()}-${i.endDate.toLocaleDateString()}`}</div> */}
            </div>


        </li>
        </Link>
    })

    }
    </ul>

} 