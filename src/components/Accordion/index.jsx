import styles from './style.module.css'
import { useState } from 'react'
import RadioCheckbox from '../RadioCheckbox'


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
                <div key={index} className={styles.card} >
                    <div className={styles.headCard} onClick={() => handleToggle(index)}>
                        <div className={styles.headCardRight}>
                            <div>{item.actionType}</div>
                            <div>{item.orderSource}</div>
                        </div>
                        <div className={styles.headCardLeft}>
                            <div>{item.tasks.filter(obj => obj.isDone == true).length}/{item.tasks.length}</div>
                            <div>{toogel === index ? "-" : "+"}</div>
                        </div>
                    </div>
                    {/* <div>{item.startDate}</div> */}
                    {toogel === index && (
                        <div className={styles.bodyCard}>
                            {item.tasks.map((tasks, i) => (
                                <div key={i}>
                                    {tasks.isDone ? <div className={styles.done}> <RadioCheckbox isDone={tasks.isDone} />{" " + tasks.details}</div> : <div className={styles.notDone}><RadioCheckbox isDone={tasks.isDone} /> {" " + tasks.details}</div>}
                                    <div className={styles.subTaskDate} >{tasks.taskDueDate}</div>
                                </div>
                            ))}

                            <button>
                                הוספת משימה
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>



        // old
        //     <div>
        //         {items.map((item, index) => (
        //             <div key={index} className={styles.card}>
        //                 <div className={styles.bodyCard}>
        //                     <div>{item.taskName}</div>
        //                     <div>{item.taskType}</div>
        //                     <div>0/{item.taskArray.length}</div>
        //                     {toogel === index ? (
        //                         <div onClick={() => handleToggle(index)}>-</div>
        //                     ) : (
        //                         <div onClick={() => handleToggle(index)}>+</div>
        //                     )}
        //                 </div>
        //                 <div>{item.taskDueDate}</div>
        //                 {toogel === index && (
        //                     <div className={styles.taskCard}>
        //                         {item.taskArray.map((subItem, i) => (
        //                             <div key={i}>
        //                                 {subItem.isDone ? <div className={styles.done}> <RadioCheckbox isDone={subItem.isDone} />{" " + subItem.taskName}</div> : <div className={styles.notDone}><RadioCheckbox isDone={subItem.isDone} /> {" " + subItem.taskName}</div>}
        //                                 <div className={styles.subTaskDate} >{subItem.taskDueDate}</div>
        //                             </div>
        //                         ))}
        //                     </div>
        //                 )}
        //             </div>
        //         ))}
        //         <div>
        //             <button>
        //                 הוספת משימה
        //             </button>
        //         </div>
        //     </div>
    );
};


export default Accordion;



