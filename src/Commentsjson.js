import {useEffect,useState,useContext} from "react";
import { CommentContext } from "./AddContext";
import { ResultForCommemts } from "./ResultForCommemts";
import { useIdListForComments } from "./useIdListForComments";
export const Commentsjson = () => {
    let [comments,setComments] = useContext(CommentContext);
    let [postId,setPostId] = useState();
    let [id,setId] = useState();
    let [listPostId,setListPostId] = useState([]); 
    const idsForPostId = useIdListForComments(postId);
    console.log(idsForPostId);

    useEffect(() => {
        requestComments();
    },[])

    async function requestComments(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        const json = await res.json();
        console.log("json",json);
        setComments(json);
        const postedIdArray = json.map((obj) => obj.postId );
        console.log(postedIdArray);
        const uniquePostedId = postedIdArray.filter((ele,index,arr)=>arr.indexOf(ele) === index);
        console.log(uniquePostedId);
        setListPostId(uniquePostedId);
    } 

    async function requestCommentsForIdAndPostId(){
        let res = [];
        if(id){
            res = await fetch(`https://jsonplaceholder.typicode.com/comments?id=${id}`);
        }else if(postId){
            res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        }
        let json = await res.json();
        console.log(json);
        if(!json.length){
            json = [json];
        }
        setComments(json);
    }

    return (
        <div>
            <div>
                <form onSubmit={(e)=> {
                    e.preventDefault();
                    requestCommentsForIdAndPostId();
                }}>
                <label>PostId
                <select value={postId} onChange={(e) => {setPostId(e.target.value); setId("")}}>
                    {listPostId.map((id,index)=>
                    <option key ={index} value={id}>{id}</option>)}
                 </select>
                </label>

                <label>Id
                <select value={id} onChange={(e) => setId(e.target.value)}>
                    <option value=""></option>    
                    {idsForPostId.map((obj,index)=> <option key={index} value={obj.id}>{obj.id}</option>)}
                </select>
                </label>

                <label>
                        <button>Submit</button>
                        <button onClick={requestComments}>View All</button>
                </label>
                <br/>
                </form>
            </div>

        <ResultForCommemts/>

        </div>

    );
}