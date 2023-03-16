//@ts-nocheck
import React, { FormEvent, useState } from 'react'
import { ChangeEventHandler } from 'react'
import useForm from '../../hooks/useForm.ts'

interface IRolesMenu {
    role: number,
    handleChange: ChangeEventHandler<HTMLInputElement>
}

function RolesMenu({role, handleChange}: IRolesMenu) {
    return(
        <div>
            <label>Roles</label>
            <label> Rol 1
                <input
                    type='radio'
                    name='role'
                    value={1}
                    checked={role == 1}
                    onChange={handleChange}
                />
            </label>
            <label> Rol 2
                <input
                    type='radio'
                    name='role'
                    value={2}
                    checked={role == 2}
                    onChange={handleChange}
                />
            </label>
            <label>Rol 3
                <input
                    type='radio'
                    name='role'
                    value={3}
                    checked={role == 3}
                    onChange={handleChange}
                />
            </label>
        </div>
    )
}

export default RolesMenu