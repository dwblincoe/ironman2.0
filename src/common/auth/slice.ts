import { createApi } from '@reduxjs/toolkit/query/react'

import { SignInDto, AuthUserDto, RegisterDto, UserDto } from './types'
import { graphQLBaseQuery } from '../api'

const signInQuery = `
    mutation signIn($user: SignInUserInput! ){
        signIn(user: $user) {
            firstName
            lastName
            username
            email
            isAdmin
            token
        }
    }
`

const registerQuery = `
    mutation register($user: UserInput! ){
        register(user: $user) {
            firstName
            lastName
            username
            email
            isAdmin
            token        
        }
    }
`

const isAuthenticatedQuery = `
    mutation {
        isAuthenticated{
            id
            firstName
            lastName
            email
            username
            isAdmin
        }
    }
`

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: graphQLBaseQuery(),
    tagTypes: ['AUTH_USER'],
    endpoints: (builder) => ({
        login: builder.mutation<AuthUserDto, SignInDto>({
            query: (dto: SignInDto) => ({
                query: signInQuery,
                variables: {
                    user: dto,
                },
            }),
        }),
        register: builder.mutation<AuthUserDto, RegisterDto>({
            query: (dto: RegisterDto) => ({
                query: registerQuery,
                variables: {
                    user: dto,
                },
            }),
        }),
        isAuthenticated: builder.mutation<UserDto, void>({
            query: () => ({
                query: isAuthenticatedQuery,
            }),
        }),
    }),
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useIsAuthenticatedMutation,
} = authApi
