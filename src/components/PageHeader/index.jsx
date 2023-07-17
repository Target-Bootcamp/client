import styles from './style.module.css'
import DataContext from '../../context'
import { useContext } from 'react'
// props : 
// creator:
function PageHeader({ pageName, activityName, style = {}, ...props }) {
const context =useContext(DataContext)
    return (
        <div className={`canter ${styles.header}`} style={style} {...props}>

           <h3> {pageName}</h3>
           <h4> {activityName}</h4>
        </div>
    )
}

export default PageHeader