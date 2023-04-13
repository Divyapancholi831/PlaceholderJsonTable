import {useEffect,useState,useContext} from 'react';
import { PostContext } from './AddContext';
import { ResultsForPosts } from './ResultForPosts';
import { useIdListForPosts } from './useIdListForPosts';
export const Postjson = () => {
    let [post,setPost] = useContext(PostContext);
    let [userid,setUserId] = useState('');
    let [id,setId] = useState('');
    let [listUserId,setListuserid] = useState([]);
    const listIdForUserId = useIdListForPosts(userid);
    console.log(listIdForUserId);

    async function requestlistid(){
        const  res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        let json = await res.json();
        setPost(json);
        const listUserIdArray = json.map((obj) => obj.userId );
        console.log(listUserIdArray);
        const uniqueUserId = listUserIdArray.filter((ele,index,arr) => arr.indexOf(ele) === index );
        console.log(uniqueUserId);
        setListuserid(uniqueUserId);
    }

    useEffect(() => {
        requestlistid();
    },[] );

    async function requestPost(){
        let res = [];
        if(id){
            res = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
        }else if(userid){
            res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`);
        }
        let json = await res.json();
        console.log("json",json);
        if(!json.length){
            json = [json];
        }
        setPost(json);
        
    }
    return (
        <div>
            <div>
                <form onSubmit={(e) => {
                e.preventDefault();
                requestPost();
                }}>
                    <label>
                        User Id :
                        <select onChange={(e) => {setUserId(e.target.value); setId('')}} value={userid}> 
                            {listUserId.map((id,index) => <option key={index} value={id} > {id} </option>)}
                        </select>
                    </label>
                    

                    <label>
                        Id :
                        <select onChange={(e) => setId(e.target.value)} value={id}>
                            <option value=""></option>
                            {listIdForUserId.map((obj,index) => <option key={index} value={obj.id}>{obj.id}</option>)}  
                        </select>
                    </label>
                    

                    <label>
                        <button>Submit</button>
                    </label>
                    <br/>
                </form>
            </div>
            <ResultsForPosts/>
    </div>
    )
}