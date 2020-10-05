import React, { useState } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'

function LoginForm() {

    const history = useHistory()

    const [username, SetUsername] = useState('')
    const [password, setPassword] = useState('')

    const UserData = {
        username: username,
        password: password
    }
    function sendUserInfo(e) {
        e.preventDefault()
        
        if(UserData.username && UserData.password){
            localStorage.setItem('user', `User : ${UserData.username}`)
            history.push('/user')
        }
        else(alert('please use correct username and password'))
       
        // Axios.post('http://localhost:8080', UserData)
        //     .then(res => {
        //         console.log(res)
        //     })
    }

    return (
        <div style={{marginTop:'2rem'}}>
            <form>
                <label style={{ margin: '30px' }}>Username:</label>
                <input placeholder='username' onChange={e => SetUsername(e.target.value)} required={true}></input>
                <br />
                <br />
                <label style={{ margin: '30px' }}>Password:</label>
                <input type='password' placeholder='password' onChange={e => setPassword(e.target.value)} required={true}></input>
                <br />
                <br />
                <button style={{ marginLeft: '180px' }} onClick={sendUserInfo}>LogIn</button>
            </form>

        </div>
    )
}

export default LoginForm
