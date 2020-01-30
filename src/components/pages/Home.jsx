import React from 'react'
import Banner from '../organisms/Banner'
import useFetch from "../custonHooks/useFetch"

const Home = () => {
    const users = useFetch("https://jsonplaceholder.typicode.com/users",[])
    console.log(users);
    return (
        <ul>    
            {users.loading && <p>Cargando...</p>}
            {users.data && users.data.map(user=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
} 
export default Home