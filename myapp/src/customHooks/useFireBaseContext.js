import { useContext } from "react";

import {FireBaseContext} from '../context/FireBase'

export const useFireBaseContext = () => {
    const context = useContext(FireBaseContext);
    if(!context){
        throw new Error("useFireBaseContext must be used within a FireBaseProvider")
    }
    return context
}