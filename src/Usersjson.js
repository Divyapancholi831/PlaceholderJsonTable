import {useEffect,useState,useContext} from 'react';
import { UserContext } from './AddContext';
import { ResultforUsers } from './ResultForUsers';
export const Usersjson = () => {
    let [users,setUsers] = useContext(UserContext);
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
            <ResultforUsers/>
        </div>
    );
}