import {useFireBaseContext} from '../../../customHooks/useFireBaseContext'

const AddDataToRealTimeDB = () => {

  const {AddDataToRealTimeDB} = useFireBaseContext()

    const setData = () => {
      AddDataToRealTimeDB('users/vasu',{
        id : 3,
        name : "srinivasaRao",
        age : 53
      })
      .then((response) => console.log("RESPONSE : ","ADDED SUCCESSFULLY"))
      .catch((error) => console.log("ERROR WHILE ADDING DATA TO REALTIME DB : ",error))
    }

  return (
    <div>
        <button onClick={setData} type="button">Set Data</button>
    </div>
  )
}

export default AddDataToRealTimeDB