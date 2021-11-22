import css from './UsersTable.module.css'
import {useEffect, useState} from "react";

const URL = 'https://jsonplaceholder.typicode.com/users'

function UsersTable(){
    const [usersArr, setUsersArr] = useState([])

    useEffect(() =>{
        ( async ()=>{
           const data = await getUsers()
            setUsersArr(data)
        })()
    },[])

    async function getUsers(){
        const resp = await fetch(URL)
        const data = await resp.json()
        // console.log(data)
        return data
    }
    return (
        <div>
            <table className={css.table}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Company</th>
                </tr>
                </thead>
                <tbody>
                {usersArr.map(item =>(
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.address.street}, {item.address.city}</td>
                        <td>{item.phone}</td>
                        <td>{item.company.name}</td>
                    </tr>
                ))}

                </tbody>

            </table>
        </div>
    )
}

export default UsersTable