import { useEffect, useContext } from 'react'
import { Typography } from '@mui/material'

import { AuthContext } from '../../common/auth/AuthContext'

const Home = () => {
    const { auth } = useContext(AuthContext)

    useEffect(() => {
        console.log(auth)
    }, [auth])

    return (
        <div>
            {auth ? (
                <Typography variant="h2">Home</Typography>
            ) : (
                <Typography variant="h2">YOU NEED TO LOG IN</Typography>
            )}
        </div>
    )
}

export default Home
