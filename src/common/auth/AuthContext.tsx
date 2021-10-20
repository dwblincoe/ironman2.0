import React, { useState, createContext, useEffect } from 'react'

import { UserDto, AuthUserDto } from './types'
import { useIsAuthenticatedMutation } from './slice'

export interface ContextType {
    auth: UserDto | null
    setTokenAndAuth: (value: AuthUserDto) => void
}

export const AuthContext = createContext<ContextType>({} as ContextType)

export const AuthProvider: React.FC = (props) => {
    const [auth, setAuth] = useState<UserDto | null>(null)
    const [isAuthenticated, { data: user }] = useIsAuthenticatedMutation()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token && !auth) {
            isAuthenticated()
        }
    }, [])

    useEffect(() => {
        if (user) {
            setAuth(user)
        }
    }, [user])

    const setTokenAndAuth = (dto: AuthUserDto) => {
        localStorage.setItem('token', dto.token)

        setAuth(dto)
    }

    return (
        <AuthContext.Provider value={{ auth, setTokenAndAuth }}>
            {props.children}
        </AuthContext.Provider>
    )
}
