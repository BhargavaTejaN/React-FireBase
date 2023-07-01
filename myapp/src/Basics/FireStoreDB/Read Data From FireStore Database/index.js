import {useFireBaseContext} from '../../../customHooks/useFireBaseContext'

const ReadDataFromFireStrom = () => {

    const {ReadDataFromFireBaseDB} = useFireBaseContext();

    const getDocument = () => {
        ReadDataFromFireBaseDB("Address","nyR48WtCwPDMN2ocscmt")
        .then((response) => console.log("RESPONSE : ",response))
        .catch((error) => console.log("ERROR WHILE READING DATA FROM FIRESTROM DB : ",error))
    }

    return(
        <div>
            <h1>READ SINGLE DATA FROM FIRESTORE DB</h1>
            <p>only if the know the id of the collection</p>
            <button onClick={getDocument}>Read Data</button>
        </div>
    )
}

export default ReadDataFromFireStrom