import React from 'react'
import "./userList.css"

const UserList = ({ users, deleteUser }) => {
    return (
        <div className='userList'>
            <div className="userList-container container">
                {users.map((user) => {
                    return (
                        <div className='card' key={user.id}>
                            <div className="card-inner">
                                <img src={user.image} alt={user.name} height={150} width={150} />
                                <h3>{user.firstName}</h3>
                                <h3>{user.lastName}</h3>
                                <p>age: {user.age}</p>
                                <p>from: {user.from}</p>
                                <p>job: {user.job}</p>
                                <p>gender: {user.gender}</p>
                                <button onClick={()=> deleteUser(user.id)}>delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserList
