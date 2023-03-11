//@ts-nocheck
import React,{FormEvent, useState} from 'react'
import useForm from '../../hooks/useForm.ts'

interface LoginForm {
    userName: string,
    password: string
}

const initialState: LoginForm = {
    username:'',
    password:''
}

function UseFormTest2(){

    const [{username, password}, handleChange] = useForm(initialState)
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
            onChange={ handleChange }
            /> 
            <label>Password</label>
            <input 
            type='text'
            name='password'
            value={password}
            onChange={ handleChange }
            /> 
            <input type='submit' value='Login'></input>
            {submitted && <h4>Submitted: {username} - {password}</h4>}
        </form>
    )
}

export default UseFormTest2