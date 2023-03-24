import {useEffect,useState} from "react";
const localCache = {};
export const useIdListForPosts = (userid) => {
    let [id,setId] = useState([]);

    useEffect(() => {
        if(!userid){
            setId([]);
        }else if(localCache[userid]){
            setId(localCache[userid])
        }
        else{
        requestIdforUserId();
        }
    },[userid])

    async function requestIdforUserId(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`);
        const json = await res.json();
        localCache[userid] = json;
        setId(json);
        console.log(json);
    }
    return id;
}