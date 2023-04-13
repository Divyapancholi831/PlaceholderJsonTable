import { AlbumContext} from "./AddContext";
import {useContext} from "react";

export const ResultsForAlbums = () => {
    const albums = useContext(AlbumContext);
    console.log("albums",albums[0]);
    return (
        <div>
            {!albums.length ? (
                <h1>No Albums..!</h1> ):
                (
                    <table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>ID</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {albums[0].map((obj)=>
                        <tr>
                            <td>{obj.userId}</td>
                            <td>{obj.id}</td>
                            <td>{obj.title}</td>
                       </tr>
                        )}
                    </tbody>
                </table>
     
                )
           }  
        </div>
    );
}