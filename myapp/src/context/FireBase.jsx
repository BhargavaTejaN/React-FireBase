import { createContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { getDatabase, set, ref,get,child } from "firebase/database";
import { getFirestore, collection, addDoc,doc,getDoc,query,where,getDocs,updateDoc } from "firebase/firestore";

export const FireBaseContext = createContext();

const firebaseConfig = {
  apiKey: "AIzaSyCCzn12tL-nyec5FF1UdQ3l8-E_DHz9tWc",
  authDomain: "react-with-firebase-61bfc.firebaseapp.com",
  projectId: "react-with-firebase-61bfc",
  storageBucket: "react-with-firebase-61bfc.appspot.com",
  messagingSenderId: "586454047059",
  appId: "1:586454047059:web:4961d4426951860fe2a9a6",
  databaseURL: "https://react-with-firebase-61bfc-default-rtdb.firebaseio.com",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const fireStore = getFirestore(firebaseApp);

export const FireBaseProvider = ({ children }) => {
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const loginUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const AddDataToRealTimeDB = async (key, data) => {
    const result = set(ref(database, key), data);
    return result
  };

  const signupUserWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider)
    .then((response) => {
        console.log("RESPONSE : ",response);
        // const credential = GoogleAuthProvider.credentialFromResult(response);
        // const token = credential.accessToken;
        // const user = response.user;
        // console.log("TOKEN : ",token);
        // console.log("USER : ",user);
    })
    .catch((error) => console.log("Error signing up with Google:", error))
  };

  const onRemoveUser = () => {
    signOut(firebaseAuth);
  }

  const AddDataToFireStromDB = async (collectionName,data) => {
    const result = await addDoc(
        collection(fireStore,collectionName),data
    )
    return result
  }

  const AddSubDataToFireStoreDB = async (collectionPathAndName,data) => {
    const result = await addDoc(
        collection(fireStore,collectionPathAndName),data
    )
    return result
  }

  const ReadDataFromFireBaseDB = async (collectionName,collectionId) => {
    const ref = doc(fireStore,collectionName,collectionId);
    const snap = await getDoc(ref)
    return snap.data()
  }

  const ReadDataUsingQueryFromFireBaseDB = async(collectionName,fieldName,operator,condition) => {
    const collectionReference = collection(fireStore,collectionName);
    const newQuery = query(collectionReference,where(fieldName,operator,condition));
    const snap = await getDocs(newQuery);
    return snap
  }

  const UpdateDataInFireStoreDB = async(collectionName,collectionID,data) => {
    const docRef = doc(fireStore,collectionName,collectionID)
    const snap = await updateDoc(docRef,data)
    return snap
  }

  const ReadDataFromRealTimeDB = async(collectionPath) => {
    const data = await get(child(ref(database),collectionPath))
    return data.val()
  }

  const value = {
    firebaseApp,
    firebaseAuth,
    database,
    signupUserWithEmailAndPassword,
    loginUserWithEmailAndPassword,
    AddDataToRealTimeDB,
    signupUserWithGoogle,
    onRemoveUser,
    AddDataToFireStromDB,
    AddSubDataToFireStoreDB,
    ReadDataFromFireBaseDB,
    ReadDataUsingQueryFromFireBaseDB,
    UpdateDataInFireStoreDB,
    ReadDataFromRealTimeDB,
  };

  return (
    <FireBaseContext.Provider value={value}>
      {children}
    </FireBaseContext.Provider>
  );
};
