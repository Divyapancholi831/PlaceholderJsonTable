import {useEffect,useState} from "react";
const loclCache = {};
export const useIdListForComments = (postId) => {
    const [listId,setListId] = useState([]);
    console.log(postId);
    async function requestIdsForPostId (){
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const json = await res.json();
        console.log("json",json);
        loclCache[postId] = json;
        setListId(json);
    }

    useEffect(()=>{
        if(!postId){
            setListId([]);
        }else if(loclCache[postId]){
            setListId(loclCache[postId]);
        }else{
            requestIdsForPostId();
        }
    },[postId])

    return listId;
}