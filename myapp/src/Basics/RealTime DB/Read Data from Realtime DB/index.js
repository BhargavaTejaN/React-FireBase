import { useFireBaseContext } from "../../../customHooks/useFireBaseContext";

const ReadDataFromRealTimeDB = () => {
  const { ReadDataFromRealTimeDB } = useFireBaseContext();

  const getData = async () => {
    try {
      const response = await ReadDataFromRealTimeDB("users");
      console.log("RESPONSE : ", response);
    } catch (error) {
      console.log("ERROR WHILE READING DATA FROM REALTIME DB : ", error);
    }
  };

  return (
    <div>
      <h1>READ DATA FROM REALTIME DB</h1>
      <button onClick={getData} type="button">
        Read Data
      </button>
    </div>
  );
};

export default ReadDataFromRealTimeDB;
