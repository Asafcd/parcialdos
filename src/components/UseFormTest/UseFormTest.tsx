import React,{FormEvent, useState} from 'react'

function UseFormTest(){

    const [username, setUsername] = useState('a')
    const [password, setPassword] = useState('*')
    const [submitted, setSubmitted] = useState(false)

    const login = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setSubmitted(true)
    }

    return(
        <form onSubmit={login}>
            <label>Username</label>
            <input 
            type='text'
            name='username'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            /> 
            <label>Password</label>
            <input 
            type='text'
            name='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            /> 
            <input type='submit' value='Login'></input>
            {submitted && <h4>Submitted: {username} - {password}</h4>}
        </form>
    )
}

export default UseFormTest