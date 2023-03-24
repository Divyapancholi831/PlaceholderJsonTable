export const ResultForCommemts = (props) => {
    const comments = props.result;
    console.log(comments);
    return (
        <div>
            {!comments.length ? (
                <h1>No Comments Table Data..</h1>
            ):(
            <table>
                <thead>
                    <tr>
                        <th>PostId</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((obj)=> 
                    <tr>
                        <td>{obj.postId}</td>
                        <td>{obj.id}</td>
                        <td>{obj.name}</td>
                        <td>{obj.email}</td>
                        <td>{obj.body}</td>
                    </tr>
                   ) }
                </tbody>
            </table>
        )}
        </div>
    )
}