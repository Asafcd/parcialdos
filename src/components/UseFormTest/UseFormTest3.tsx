//@ts-nocheck
import React, { FormEvent, useState } from 'react'
import useForm from '../../hooks/useForm.ts'
import RolesMenu from './RolesMenu.tsx'

interface EmployeeForm {
    username: string,
    fullname: string,
    description: string,
    position: string,
    role: number
}

const initialState: EmployeeForm = {
    username: '',
    fullname: '',
    description: '',
    position: '',
    role: 1
}

function UseFormTest3() {

    const [{ username, fullname, description, position, role }, handleChange] = useForm(initialState)
    const [submitted, setSubmitted] = useState(false)

    const login = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <form onSubmit={login}>
            <label>User name</label>
            <input
                type='text'
                name='username'
                value={username}
                onChange={handleChange}
            />
            <br />
            <label>Full name</label>
            <input
                type='text'
                name='fullname'
                value={fullname}
                onChange={handleChange}
            />
            <br />
            
            <br />
            <input type='submit' value='Login' />
            <br />
            <label> Position</label>
            <select
                name='position'
                value={position}
                onChange={handleChange}
            >
                <option value={1}>Manager</option>
                <option value={2}>Developer</option>
                <option value={3}>Scrum</option>
                <option value={4}>Architect</option>

            </select>
            <br />
            <label> Description </label>
            <textarea
                name='description'
                value={description}
                onChange={handleChange}
                rows={3}
                cols={20}
            />
            <RolesMenu
                role={role}
                handleChange={handleChange}
            />
            {submitted && <h4>Submitted <br />
                username: {username} <br />
                fullname: {fullname} <br />
                position: {position} <br />
                role: {role} <br />
                description: {description}
            </h4>}

        </form>
    )
}

export default UseFormTest3