import { useContext } from 'react'
import styles from './style.module.css'
import { DataContext } from '../../context'
import Button from '../Button'
// props : obj-file
// creator:zvi miler
function EditFile({ obj, style = {}, ...props }) {
    const data = useContext(DataContext)
    const editFileName = (e,obj) => {
        e.preventDefault()
        console.log(e.target.fileName.value);
        data.setPopUp(null)
    }
    return (
        <div className={styles.name} style={style} {...props}>
            <form onSubmit={(e) => {editFileName(e,obj) }}>
                <div>
                    <input type='text' defaultValue={obj.name} name='fileName'></input>
                    {/* <button type='submit'>עדכן</button> */}
                    <Button type={"submit"} butoonName={"עדכן"}/>
                </div>
            </form>
        </div>
    )
}

export default EditFile


