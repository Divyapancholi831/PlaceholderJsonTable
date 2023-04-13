import {useEffect,useState,useContext} from 'react';
import { PhotoContext } from './AddContext';
import { ResultForPhotos } from './ResultForPhotos';
import { useIdListforPhotos } from './useIdListForPhotos';
export const Photosjson = () => {
    let [photos,setPhotos] = useContext(PhotoContext);
    let[albumId,setAlbumId]=useState('');
    let [id,setId] = useState('');
    let [listAlbumId,setListAlbumId] = useState([]);
    const listId = useIdListforPhotos(albumId);
    console.log(listId);

    async function requestPhotos(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        const json = await res.json();
        console.log("json",json);
        setPhotos(json);
        const allAlbumId = json.map((obj)=>obj.albumId);
        console.log(allAlbumId);
        const uniqueAlbumId = allAlbumId.filter((ele,index,arr) => arr.indexOf(ele) === index );
        console.log(uniqueAlbumId);
        setListAlbumId(uniqueAlbumId);
    }
    async function requestPhotosForIdAndAlbumId(){
        let res = [];
        if(id){
            res = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${id}`);
        }else if(albumId){
            res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
        }
        let json = await res.json();
        if(!json.length){
            json = [json];
        }
        setPhotos(json);
    }

    useEffect(()=>{
        requestPhotos();
    },[])


    return (
        <div>
            <div>
             <form onSubmit={(e)=> 
                {e.preventDefault(); 
                requestPhotosForIdAndAlbumId()}
                }>  

                <label>
                AlbumId:
                <select value={albumId} onChange={(e)=>{setAlbumId(e.target.value); setId("")}}> 
                    {listAlbumId.map((id,index) => <option key={index} value={id}>{id}</option>)}
                </select>
                </label>

                <label>
                 ID:
                <select value={id} onChange={(e) => setId(e.target.value)}>
                    <option value=""></option>
                    {listId.map((obj,index) => <option key={index} value={obj.id}>{obj.id}</option>)}
                </select>   
                </label>

                <label>
                    <button>Submit</button>
                </label>

                </form>
            </div>
            
            <ResultForPhotos/>
        </div>
    );
}