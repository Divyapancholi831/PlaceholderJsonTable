import {useEffect,useState} from "react";
const localCache = {};
export const useIdListForAlbum=(userid) => {
let [Id,setId] = useState([]);
console.log(userid);
async function requestIds(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userid}`);
    const json = await res.json();
    console.log("json",json);
    localCache[userid] = json;
    setId(json);
}

useEffect(() => {
    if(!userid){
        setId([]);
    }else if(localCache[userid]){
        setId(localCache[userid]);
    }else{
    requestIds();
    }
},[userid])

return Id;
};