import { useContext } from 'react'
import styles from './style.module.css'
import { DataContext } from '../../context'
import Button from '../Button'
import InputText from '../InputText'
import apiCalls from '../../functions/apiCalls'
// import { useParams } from 'react-router-dom'
// props : obj-file
// creator:zvi miler
function EditFile({ obj, style = {}, ...props }) {
    const data = useContext(DataContext)
    // const params =useParams()
    const editFileName = (e,obj) => {
        e.preventDefault()
       const newFileName={fileName:e.target.fileName.value};
        data.setPopUp(null)
        apiCalls.put(`/actions/${data.currentAction._id}/files/${obj._id}`,newFileName)
        .then((res)=>props.setFiles(res))
        
        // console.log(props);
    }
    return (
        <div className={styles.name} style={style} {...props}>
            <form onSubmit={(e) => {editFileName(e,obj) }}>
                <div>
                    <InputText type={'text'} defaultValue={obj.fileName} name={'fileName'}/>
                    {/* <input type='text' defaultValue={obj.fileName} name='fileName'></input> */}
                    {/* <button type='submit'>עדכן</button> */}
                    <Button type={"submit"} butoonName={"עדכן"} className={'w55'}/>
                </div>
            </form>
        </div>
    )
}

export default EditFile


