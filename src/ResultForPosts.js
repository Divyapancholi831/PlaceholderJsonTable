import {useContext} from "react";
import { PostContext } from "./AddContext";
export const ResultsForPosts = () => {
    const post = useContext(PostContext);
    console.log("post",post[0])
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                  { post[0].map((post) => 
                    <tr>
                        <td>{post.userId}</td>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                    )}  
                </tbody>
            </table>
            </div>

    );
}