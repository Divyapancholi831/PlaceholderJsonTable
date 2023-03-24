import {useEffect,useState} from 'react';
import { ResultsForAlbums } from './ResultsForAlbums';
import { useIdListForAlbum } from './useIdListForAlbum';
// let USERID = [1,2,3,4,5,6,7,8,9,10];
export const Albumjson = () => {
    let [albums,setAlbums] = useState([]);
    let [userid,setUserid] = useState("");
    let [listuserid,setListuserid] = useState([]);
    let [ids,setId] = useState('');
    const IDs = useIdListForAlbum(userid);


    async function requestAlbums() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/albums`);
        const json = await res.json();
        console.log("json",json);
        const useridarray = json.map((obj)=> obj.userId);
        const uniqueuserid = useridarray.filter((element,index,arr)=>arr.indexOf(element) === index );
        console.log(useridarray);
        console.log(uniqueuserid);
        setListuserid(uniqueuserid);
        setAlbums(json);
    }

    async function requestAlbumForIdAndUserId(){
        let res = [];
        if(ids){
            res = await fetch(`https://jsonplaceholder.typicode.com/albums/?id=${ids}`);
        }else if(userid){
            res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userid}`);
        }
        let json = await res.json();
        if(!json.length){
            json = [json];
        }
        setAlbums(json);

    }

    useEffect(()=>{
        requestAlbums();
    },[])


    return (
        <div>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    requestAlbumForIdAndUserId();
                    }}> 
               
                <label>
                    User Id:
                    <select onChange={(e)=>{setUserid(e.target.value); setId("")}} value={userid}> 
                        {listuserid.map((id,index) => <option value={id} key={index}>{id}</option> )}
                    </select>
                </label> 
                

                <label>
                    ID:
                    <select onChange={(e) => setId(e.target.value)} value={ids}>
                        <option value=""></option>
                        {IDs.map((obj,index) => <option value={obj.id} key={index}>{obj.id}</option>)}
                    </select>
                </label> 
                
               

                <label>
                    <button>Submit</button>
                </label> 
                <br/>   

                </form>           
            </div>
           
                <ResultsForAlbums albums={albums}/> 


            {/* {!albums.length ?(
                <h1>No albums </h1>
            ) : (   
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map((obj)=>
                    <tr>
                        <td>{obj.id}</td>
                        <td>{obj.title}</td>
                   </tr>
                    )}
                </tbody>
            </table>
           ) } */}
           
        </div>
    );
}