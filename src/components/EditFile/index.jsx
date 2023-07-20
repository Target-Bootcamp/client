import { useContext } from 'react'
import styles from './style.module.css'
import { DataContext } from '../../context'
import Button from '../Button'
import InputText from '../InputText'
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
                    <InputText type={'text'} defaultValue={obj.fileName} name={'fileName'}/>
                    <input type='text' defaultValue={obj.fileName} name='fileName'></input>
                    {/* <button type='submit'>עדכן</button> */}
                    <Button type={"submit"} butoonName={"עדכן"} className={'w55'}/>
                </div>
            </form>
        </div>
    )
}

export default EditFile


