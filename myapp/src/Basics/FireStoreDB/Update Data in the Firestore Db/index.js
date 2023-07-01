
import {useFireBaseContext} from '../../../customHooks/useFireBaseContext'

const UpdateData = () => {

    const {UpdateDataInFireStoreDB} = useFireBaseContext();

    const update = () => {
        UpdateDataInFireStoreDB("Address",'3r9N9Rim8uW80H4vz1yZ',{
            city : 'Bangalore'
        })
        .then((response) => console.log("RESPONSE : ","Data Updated Successfully"))
        .catch((error) => console.log("ERROR WHILE UPDATING THE DATA IN FIRESTORE DB : ",error))
    }

    return(
        <div>
            <h1>UPDATE DATA IN FIRESTORE DB</h1>
            <button onClick={update}>Read Data Using Query</button>
        </div>
    )
}

export default UpdateData