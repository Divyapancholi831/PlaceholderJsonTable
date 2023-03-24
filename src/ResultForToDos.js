export const ResultforToDos = (props) => {
    const todos = props.todos;
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
            {todos.map((obj) => 
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