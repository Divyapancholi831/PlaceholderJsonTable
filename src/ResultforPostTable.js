export const ResultforPostTable = (props) => {
    const post = props.post;
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
                    {post.map((obj)=>
                    <tr>
                    <td>{obj.userId}</td>
                    <td>{obj.id}</td>
                    <td>{obj.title}</td>
                    <td>{obj.body}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}