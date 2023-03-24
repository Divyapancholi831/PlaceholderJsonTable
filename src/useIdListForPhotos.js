import {useEffect,useState} from "react";
const localCache = {};
export const useIdListforPhotos = (albumId) => {
    let [idList,setIdList] = useState([]);

    useEffect(() => {
        if(!albumId){
            setIdList([]);

        }else if(localCache[albumId]){
            setIdList(localCache[albumId])
        }
        else{
            requestIdforAlbumId();
        }
    },[albumId])

    async function requestIdforAlbumId(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
        const json = await res.json();
        console.log(json);
        localCache[albumId] = json;
        setIdList(json);
    }
    return idList;
}