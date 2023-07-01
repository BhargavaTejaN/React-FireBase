import { useState,useEffect } from 'react'
import {onValue,ref} from 'firebase/database'

import {useFireBaseContext} from '../../../customHooks/useFireBaseContext'

const ReadRealTimeData = () => {

    const {database} = useFireBaseContext();

    const [name,setName] = useState('');

    useEffect(() => {
        onValue(ref(database,'users/bhargav'),(snapshot) => setName(snapshot.val().name))
    },[])

    return(
        <div>
            <h1>READING REALTIME DATA FROM REATIME DB</h1>
            <h3>{name}</h3>
        </div>
    )
}

export default ReadRealTimeData