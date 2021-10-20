import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const graphQLBaseQuery =
    (): BaseQueryFn<{ query: string; variables?: any }, unknown, AxiosError> =>
    async ({ query, variables }: { query: string; variables?: any }) => {
        const token = localStorage.getItem("token");
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
            );

            if (!results.data.errors) {
                let name = Object.keys(results.data.data)[0];
                return { data: results.data.data[name] };
            } else {
                results.data.errors.forEach((error: any) =>
                    toast.error(error.message)
                );
                return { errors: results.data.errors };
            }
        } catch (error) {
            toast.error(error.toString());
            return error;
        }
    };
