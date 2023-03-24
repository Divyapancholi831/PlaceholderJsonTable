import {useEffect,useState} from "react";
const localCache = {};
export const useIdListforToDos = (userId) => {

    let [listId,setListId] = useState([]);

    async function requestIdForUserId(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        const json = await res.json();
        console.log(json);
        localCache[userId] = json;
        setListId(json);
    }

    useEffect(()=>{
        if(!userId){
            setListId([])
        }else if(localCache[userId]){
            setListId(localCache[userId])
        }
        else{
            requestIdForUserId();
        }
    },[userId])

    return listId;
}