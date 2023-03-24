import {useEffect,useState} from 'react';
import { ResultforPostTable } from './ResultforPostTable';
import { useIdListforPostTable } from './useIdListforPostTable';
const PostTableJson = () => {
    let [post,setPost] = useState([]);
    let [listuserid,setListUserId] = useState([]);
    let [userId,setUserId] = useState('');
    let [id,setId] = useState('');
    const Ids = useIdListforPostTable(userId);
    console.log(Ids);

    useEffect(()=>{
        requestPost();
    },[])

    async function requestPost(){
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        let json = await res.json();
        console.log("json",json);
        setPost(json);
        const userIdarray = json.map((obj) => obj.userId ) ;
        console.log(userIdarray);
        const uniquearray = userIdarray.filter((ele,index,arr) => arr.indexOf(ele) === index);
        console.log(uniquearray);
        setListUserId(uniquearray);
    }
    async  function requestPostForIdAndUserId(){
        let res =  [];
        if(id){
             res = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
        }else if(userId){
             res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        }
        let json = await res.json();
        console.log(json);
        if(!json.length){
            json=[json]
        }
        setPost(json);
    }

    return (
        <div>
            <div>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    requestPostForIdAndUserId();
                    }}>

                <label>
                    User ID:
                    <select value={userId} onChange={(e) => {setUserId(e.target.value); setId('')}}>
                       {listuserid.map((userid,index) => <option key={index} value={userid}>{userid}</option>)} 
                    </select>
                </label>

                <label>
                    ID :
                    <select value={id} onChange={(e) => setId(e.target.value)}>
                        <option value=""></option>
                       {Ids.map((obj,index) => <option key={index} value={obj.id}>{obj.id}</option>)} 
                    </select>
                </label>

                <label>
                    <button>Submit</button>
                </label>
                <br/>

                </form>

            </div>
            <ResultforPostTable post={post}/>
        </div>
    );
};
export default PostTableJson;