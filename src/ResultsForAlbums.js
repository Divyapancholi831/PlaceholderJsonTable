export const ResultsForAlbums = (props) => {
    const albums = props.albums;
    console.log(albums);
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
                        {albums.map((obj)=>
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