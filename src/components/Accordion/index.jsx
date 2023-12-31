import styles from './style.module.css';
import { useState, useContext } from 'react';
import RadioCheckbox from '../RadioCheckbox';
import { DataContext } from '../../context';

const Accordion = ({ items, style = {}, ...props }) => {
    const dataContext = useContext(DataContext);
    const [toggleIndex, setToggleIndex] = useState(null);

    const handleToggle = (index) => {
        setToggleIndex((prevToggleIndex) => (prevToggleIndex === index ? null : index));
    };

    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.headCard} onClick={() => handleToggle(index)}>
                        <div className={styles.headCardRight}>
                            <div>{item.actionType}</div>
                            {/* to do add icon orderSource */}
                            <div>{item.orderSource}</div>
                        </div>
                        <div className={styles.headCardLeft}>
                            <div>{item.tasks.filter(obj => obj.isDone === true).length}/{item.tasks.length}</div>
                            {toggleIndex === index ? (
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
                    {toggleIndex === index && (
                        <div className={styles.bodyCard}>
                            {item.tasks.map((task, i) => (
                                <div key={i}>
                                    <RadioCheckbox task={task} />
                                </div>
                            ))}
                            <div className={styles.addTaskBtnArea}>
                                {/* to do set up the popup */}
                                <div className={styles.addTaskBtn} onClick={() => dataContext.setPopUp(<div>hello</div>)}>
                                    <div className={styles.addTaskBtnIcon}>&#43;</div>
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
