export const ResultsForPosts = (props) => {
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
                  { post.map((post) => 
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