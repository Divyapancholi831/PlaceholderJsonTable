import { useContext} from "react";
import { PhotoContext } from "./AddContext";
export const ResultForPhotos = () => {
    const photos = useContext(PhotoContext);
    console.log("photos",photos[0]);
    return (
        <div>
            {!photos.length ? 
            (<h1>No Data For Photos Table.....!</h1>)
            :(
            <table>
                <thead>
                    <tr>
                        <th>AlbumId</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>URL</th>
                        <th>ThumbnailURL</th>
                    </tr>
                </thead>
                <tbody>
                    {photos[0].map((obj)=>
                    <tr>
                        <td>{obj.albumId}</td>
                        <td>{obj.id}</td>
                        <td>{obj.title}</td>
                        <td><img src={obj.url} width="50" height="50" alt={obj.id}/></td>
                        <td><img src={obj.thumbnailUrl} width="50" height="50" alt={obj.id}/></td>
                    </tr>
                        )}
                </tbody>
            </table>
        )}
        </div>

    );
}