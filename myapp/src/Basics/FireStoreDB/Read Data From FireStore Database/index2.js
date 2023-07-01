
import {useFireBaseContext} from '../../../customHooks/useFireBaseContext'

const ReadDataUsingQuery = () => {

    const {ReadDataUsingQueryFromFireBaseDB} = useFireBaseContext();

    const getDocumentsByQuery = () => {
        ReadDataUsingQueryFromFireBaseDB('Address','city','==','Guntur')
        .then((response) => {
            response.forEach((eachDoc) => console.log(eachDoc.data()))
        })
        .catch((error) => console.log("ERROR WHILE READING DATA USING QUERY FROM FIRESTORE DB : ",error))
    }

    return(
        <div>
            <h1>READ DATA USING QUERY FROM FIRESTORE DB</h1>
            <p>using query we will fatch data from the db</p>
            <button onClick={getDocumentsByQuery}>Read Data Using Query</button>
        </div>
    )
}

export default ReadDataUsingQuery