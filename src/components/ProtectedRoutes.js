import React from 'react'
import {Redirect, Route} from 'react-router-dom'

const userName = localStorage.getItem('user')


 function ProtectedRoutes({component: Component , ...rest}){
return (

 <Route
    render = {props => userName ? (
        <Component {...props}/>
        ): 
        (<Redirect 
        to= {{
            pathname:'/'
        }} />)
    }
    
    />
)
}


export default ProtectedRoutes



