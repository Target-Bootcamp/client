import styles from './style.module.css'
import { useState } from 'react'
import RadioCheckbox from '../RadioCheckbox'
import Popup from "../../layout/Popup"

// props : 
// creator: yinon ron
// {/* <div className={styles} style={style} {...props}> */}

const Accordion = ({ items, style = {}, ...props }) => {
    const [toogel, settoogel] = useState(null)
    const handleToggle = (index) => {
        settoogel((prevToogel) => (prevToogel === index ? null : index))
    }
    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.headCard} onClick={() => handleToggle(index)}>
                        <div className={styles.headCardRight}>
                            <div>{item.actionType}</div>
                            <div>{item.orderSource}</div>
                        </div>
                        <div className={styles.headCardLeft}>
                            <div>{item.tasks.filter(obj => obj.isDone == true).length}/{item.tasks.length}</div>
                            {toogel === index ? (
                                <div className={styles.addTaskBtn}>
                                    <div className={styles.addTaskBtnIcon}>-</div>
                                </div>
                            ) : (
                                <div className={styles.addTaskBtn}>
                                    <div className={styles.addTaskBtnIcon}>+</div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* to do add end date */}
                    <div>12/02/24</div>
                    {toogel === index && (
                        <div className={styles.bodyCard}>
                            {item.tasks.map((task, i) => (
                                <div key={i}>
                                    {task.isDone ? <div className={styles.done}>
                                        {/* to do add function that updates the server with the new task status on componnt RadioCheckbox */}
                                        <RadioCheckbox isDone={task.isDone} />{" " + task.details}</div> : <div className={styles.notDone}><RadioCheckbox isDone={task.isDone} /> {" " + task.details}</div>}
                                    <div className={styles.subTaskDate} >{task.taskDueDate}</div>
                                </div>
                            ))}
                            <div className={styles.addTaskBtnArea}>
                                <div className={styles.addTaskBtn}>
                                    {/* to do add function onClick */}
                                    <div className={styles.addTaskBtnIcon} >&#43;</div>
                                    הוספת משימה
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};


export default Accordion;



