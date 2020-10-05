import React from 'react'
import { useHistory } from 'react-router-dom'

function UserInfo() {
    const userName = localStorage.getItem('user')
    const history = useHistory()

    const logout = (e) =>{
        e.preventDefault()
        localStorage.removeItem('user')
        history.push('/login')
        
    }
    return (
        <div>
            <h1>{userName}</h1>

            <button onClick={logout}>Log Out</button>

            
        </div>
    )
}

export default UserInfo
