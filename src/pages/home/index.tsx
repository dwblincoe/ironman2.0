import { useEffect, useContext } from 'react'

import { AuthContext } from '../../common/auth/AuthContext'

const Home = () => {
    const { auth } = useContext(AuthContext)

    useEffect(() => {
        console.log(auth)
    }, [auth])

    return (
        <div>
            <h2>HOME</h2>
        </div>
    )
}

export default Home
