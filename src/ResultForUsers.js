import {useContext} from "react";
import { UserContext } from "./AddContext";
export const ResultforUsers = () => {
    const users = useContext(UserContext);
    console.log("users",users[0])
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
                    {users[0].map((obj) =>
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