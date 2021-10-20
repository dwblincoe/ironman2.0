import { BaseQueryFn } from '@reduxjs/toolkit/dist/query'
import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'

type Props = {
    query: string
    variables?: any
}

export const graphQLBaseQuery =
    (): BaseQueryFn<Props, unknown, AxiosError> =>
    async ({ query, variables }: Props): Promise<any> => {
        const token = localStorage.getItem('token')
        try {
            const results = await axios.post(
                `${process.env.REACT_APP_API_URL}`,
                {
                    query,
                    variables,
                },
                {
                    headers: {
                        Authorization: token,
                    },
                }
            )

            if (!results.data.errors) {
                let name = Object.keys(results.data.data)[0]
                return { data: results.data.data[name] }
            } else {
                results.data.errors.forEach((error: any) =>
                    toast.error(error.message)
                )
                return { errors: results.data.errors }
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.toString())
            }
            return error
        }
    }
