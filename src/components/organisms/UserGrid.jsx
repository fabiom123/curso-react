import React from 'react'
import UserCard from '../molecules/UserCard'
import withLoader from '../HOC/withLoader'

const UserGrid = ({users}) => (
    <div className="ed-grid s-grid-1 m-grid-3">
        <h1>Usuarios</h1>
        <div>
        { 
            users.map((c => 
                <UserCard 
                key={c.id} 
                name={c.name} 
                email={c.email} 
            /> ))
        }
        </div>
    </div>
)

export default withLoader("users")(UserGrid)