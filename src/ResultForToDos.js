import {useContext} from "react";
import { TodoContext } from "./AddContext";
export const ResultforToDos = () => {
    const todos = useContext(TodoContext);
    console.log("todos",todos[0]);
    return(
    <div>
        {!todos.length ? 
        (<h1>No Data for ToDos Table...!</h1>) 
        :( 
        <table>
        <thead>
            <tr>
                <th>UserId</th>
                <th>ID</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>
        </thead>
        <tbody>
            {todos[0].map((obj) => 
            <tr>
                <td>{obj.userId}</td>
                <td>{obj.id}</td>
                <td>{obj.title}</td>
                <td>{`${obj.completed}`}</td>
            </tr>
                )}
        </tbody>
    </table>
    )}
    </div>
    );
}