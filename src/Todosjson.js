import {useEffect,useState,useContext} from 'react';
import { TodoContext } from './AddContext';
import { ResultforToDos } from './ResultForToDos';
import { useIdListforToDos } from './useIdListForToDos';
export const Todosjson = () => {
    
    let [todos,setTodos] = useContext(TodoContext);
    let [listUserId,setListUserId] = useState([]);
    let [userId,setUserId] = useState('');
    let [id,setId] = useState('');
    const idArray = useIdListforToDos(userId);
    
    
    async function requestTodos(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const json = await res.json();
        console.log("json",json);
        setTodos(json);
    }

    async function requestTodosforuserId(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const json = await res.json();
        console.log("json",json);
        setTodos(json);
        const allUserId = json.map((obj)=>obj.userId);
        console.log(allUserId);
        const uniqueUserId = allUserId.filter((ele,index,arr)=>arr.indexOf(ele) === index);
        console.log(uniqueUserId);
        setListUserId(uniqueUserId);
    }

    async function requestToDosForIdAndUserId(){
        let res = [];
        if(id){
            res = await fetch(`https://jsonplaceholder.typicode.com/todos?id=${id}`);
        }else if(userId){
            res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        }
        let json = await res.json();
        if(!json.length){
            json = [json];
        }
        setTodos(json);
    }

    useEffect(()=>{
        requestTodosforuserId();
    },[]);

    return (
        <div>
            <form onSubmit={(e)=>{
                    e.preventDefault();
                    requestToDosForIdAndUserId();
            }}>
                <lable>
                UserId:
                <select onChange={(e)=>{setUserId(e.target.value); setId("")}} value={userId}> 
                    {listUserId.map((id,index)=><option key={index} value={id}>{id}</option>)}
                </select>
                </lable>

                <lable>
                Id:
                <select value={id} onChange={(e)=>setId(e.target.value)}>
                    <option value=""></option>
                    {idArray.map((obj,index)=><option key={index} value={obj.id}>{obj.id}</option>)}
                </select>    
                </lable>

                <lable>
                <button type="submit">Submit</button>
                <button type="button" onClick={requestTodos}>View All</button>
                </lable>
            </form>
            
            <ResultforToDos/>
        </div>
    );
}