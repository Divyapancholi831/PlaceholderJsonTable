export const ResultforUsers = (props) => {
    const users = props.users;
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>phone</th>
                        <th>website</th>
                        <th>Company</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {users.map((obj) =>
                    <tr>
                        <td>{obj.name}</td>
                        <td>{obj.username}</td>
                        <td>{obj.email}</td>
                        <td>{obj.address.city}</td>
                        <td>{obj.phone}</td>
                        <td>{obj.website}</td>
                        <td>{obj.company.name}</td>
                    </tr>
                    )}
                </tbody>
            </table>

        </div>
    );

}