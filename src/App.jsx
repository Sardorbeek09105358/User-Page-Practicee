import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import NewUSer from './components/newUser/newUser'
import UserList from './components/userList/userList'

function App() {
    const [showModal, setShowModal] = useState(false)
    const [users, setUsers] = useState([])

    // delete user

    const deleteUser = (id) => {
        setUsers((prev) => {
            return users.filter((user) => {
                return user.id !== id
            })
        })
    }

    // Modalni yopish
    const closeModal = (e) =>{
      if(e.target.className === "overlay"){
        setShowModal(false)
      }
    }
    
    // add user

    const addUser = (user) =>{
        setUsers((prev) =>{
            return [...prev, user]
        })
        setShowModal(false)
    }

    return (
        <div className='App' onClick={closeModal}>
            <Navbar userslength={users.length} />
            <main>
                <div className='no-users'>
                    {users.length === 0 && <h2>no users</h2>}
                </div>
                <UserList users={users} deleteUser={deleteUser} />
            </main>
            {showModal && <NewUSer addUser={addUser}/>}
            <button className='create-user' onClick={() => setShowModal(true)}>create user</button>
            <Footer />
        </div>
    )
}

export default App
