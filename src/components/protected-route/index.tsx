import { useContext } from 'react'
import { Route, RouteProps } from 'react-router-dom'

import { ContextType, AuthContext } from '../../common/auth/AuthContext'

import Unauthorized from '../../pages/unauthorized'

type Props = {
    admin?: boolean
}

const ProtectedRoute: React.FC<Props & RouteProps> = ({
    admin = false,
    ...rest
}: Props) => {
    const { auth } = useContext<ContextType>(AuthContext)

    if (!auth) {
        return <Unauthorized />
    }
    return admin && !auth.isAdmin ? <Unauthorized /> : <Route {...rest} />
}

export default ProtectedRoute
