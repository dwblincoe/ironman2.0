import { useEffect, useContext } from 'react'
import { Typography } from '@material-ui/core'

import { AuthContext } from '../../common/auth/AuthContext'

const Home = () => {
    const { auth } = useContext(AuthContext)

    useEffect(() => {
        console.log(auth)
    }, [auth])

    return (
        <div>
            {auth ? (
                <Typography variant="h2" color="textSecondary">
                    Home
                </Typography>
            ) : (
                <Typography variant="h2" color="textSecondary">
                    YOU NEED TO LOG IN
                </Typography>
            )}
        </div>
    )
}

export default Home
