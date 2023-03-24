import {useEffect,useState} from 'react'
const localCache = {};
export const useIdListforPostTable = (userId) => {
    let [idList,setIdList] = useState([]); 

    async function requestIdforUserId(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const json  = await res.json();
        console.log("json",json);
        localCache[userId] = json;
        setIdList(json);
    }

    useEffect(()=>{
        if(!userId){
            setIdList([]);
        }else if(localCache[userId]){
            setIdList(localCache[userId])
        }
        else{
        requestIdforUserId();
        }
    },[userId])

    return idList;
} 