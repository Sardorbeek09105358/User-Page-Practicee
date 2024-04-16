import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import "./newUser.css"
const NewUSer = ({addUser}) => {
    const [user, setUser] = useState({
        id: uuidv4(),
        image: '',
        firstName: '',
        lastName: '',
        age: null,
        from: '',
        job: '',
        gender: ''
    })
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (user.job.trim() === '') {
            alert('Please enter a job');
            return;
        }
      addUser(user)
    }
    return (
        <div className='modal-wrapper'>
            <div className="overlay">
                <div className="modal">
                    <h2>create user</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>image url</span>
                            <input type="url" required onChange={(e) => { setUser((prev) => { return { ...prev, image: e.target.value } }) }} />
                        </label>
                        <label>
                            <span>first name</span>
                            <input type="text" required onChange={(e) => { setUser((prev) => { return { ...prev, firstName: e.target.value } }) }} />
                        </label>
                        <label>
                            <span>Last name</span>
                            <input type="text" required onChange={(e) => { setUser((prev) => { return { ...prev, lastName: e.target.value } }) }} />
                        </label>
                        <label>
                            <span>age</span>
                            <input type="number" required onChange={(e) => { setUser((prev) => { return { ...prev, age: e.target.value } }) }} />
                        </label>
                        <label>
                            <span>from</span>
                            <input type="text" required onChange={(e) => { setUser((prev) => { return { ...prev, from: e.target.value } }) }} />
                        </label>
                        <label>
                            <span>job</span>
                            <input type="text" required onChange={(e) => { setUser((prev) => { return { ...prev, job: e.target.value } }) }} />
                        </label>
                        <div className='gender'>
                            <span>gender:</span>
                            <label>
                                <small>male</small>
                                <input type="radio" required name='gender' value="male" onChange={(e) => { setUser((prev) => { return { ...prev, gender: e.target.value } }) }} />
                            </label>
                            <label>
                                <small>female</small>
                                <input type="radio" required name='gender' value="female" onChange={(e) => { setUser((prev) => { return { ...prev, gender: e.target.value } }) }} />
                            </label>
                        </div>
                        <button type='submit' className='modal-btn'>submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewUSer
