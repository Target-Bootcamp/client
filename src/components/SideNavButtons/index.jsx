import React, { useState } from 'react';
import styles from './style.module.css' 
import { GoHomeFill} from 'react-icons/go'
import { FiCheckCircle} from 'react-icons/fi'
import { FaUserAlt } from 'react-icons/fa'
import { BsCalendar4 } from 'react-icons/bs'
import { AiOutlineInfoCircle} from 'react-icons/ai'
import { CiFolderOn} from 'react-icons/ci'
import { Link } from 'react-router-dom';
const SideNavButtons = () => {
    
    const [active, setActive] = useState(0);
    const textArr =[
        {text:"פרטים",icon:<AiOutlineInfoCircle/>,to:"/action/1"},
        {text:"קבצים",icon:<CiFolderOn/>,to:'/action/1/files'},
        {text:"משימות",icon:<FiCheckCircle/>,to:"/action/1/tasks"},
        {text:"תלמידים",icon:<FaUserAlt/>,to:"/action/1/students"},
        {text:'לו"ז',icon:<BsCalendar4/>,to:"/action/1/schedule"}
    ]
    return (
        <>
            <Link id={styles.homeBtu} to={"/"} className={`center ${styles.btu}`}><GoHomeFill/></Link>
            {textArr.map(v=>{
                return <Link
                 onClick={()=>setActive(v.text)} 
                 key={v.text} 
                 to={v.to} 
                 className={`center ${styles.btu} ${active===v.text?styles.active:""}`}
                 >
                    {v.icon}<span>{v.text}</span>
                </Link>
            })}
        </>
    );
}

export default SideNavButtons;
