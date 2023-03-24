import {useEffect,useState} from 'react';
import { ResultforUsers } from './ResultForUsers';
export const Usersjson = () => {
    let [users,setUsers] = useState([]);
    async function requestUsers(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const json = await res.json();
        console.log("json",json);
        setUsers(json);
    }
    useEffect(() => {
        requestUsers();
    },[])
    return(
        <div>
            <ResultforUsers users={users}/>
        </div>
    );
}