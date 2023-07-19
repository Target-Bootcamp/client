import styles from './style.module.css'
import {DataContext} from '../../context'
import { useContext } from 'react'
// props : pageName ,actionType
// creator:zvi miler
function PageHeader({ pageName,actionType, style = {}, ...props }) {
const Data =useContext(DataContext)
const action= Data.settings.actionType.find(v=>v.actionType===actionType);
    return (
        <div className={styles.header} style={style} {...props}>

           <h3 className={styles.pageName}> {pageName}</h3>
           <h4 className={styles.actionType} style={{font:action.font, color:action.colors.secondary}}> {action. nameHebrew}</h4>
        </div>
    )
}

export default PageHeader