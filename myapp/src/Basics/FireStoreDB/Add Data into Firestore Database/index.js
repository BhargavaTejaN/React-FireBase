
import { useFireBaseContext } from "../../../customHooks/useFireBaseContext";

const AddDataToFireStoreDB = () => {
  const { AddDataToFireStromDB,AddSubDataToFireStoreDB } = useFireBaseContext();

  const writeData = () => {
    AddDataToFireStromDB("Address",{
        state : 'Telengana',
        city : 'Hyderabad',
        pincode : 522002
    })
    .then((response) => console.log("RESPONSE : ",response))
    .catch((error) => console.log("ERROR WHILE ADDING DATA : ",error))
  };

  const makeSubCollection = () => {
    AddSubDataToFireStoreDB("Address/nyR48WtCwPDMN2ocscmt/Areas",{
        name : "LakshmiPuram",
        description : "This is one of the best places to visit in guntur",
        date : new Date().toLocaleDateString()
    })
    .then((response) => console.log("ADDED SUCCESSFULLY"))
    .catch((error) => console.log("ERROR WHILE ADDING SUB COLLECTION : ",error))
  }

  return (
    <div>
      <h1>FIREBASE FIRESTORE</h1>
      <button onClick={writeData}>Add Data</button>
      <button onClick={makeSubCollection}>Add Sub Data</button>
    </div>
  );
};

export default AddDataToFireStoreDB;
