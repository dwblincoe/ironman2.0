import { Suspense, lazy } from 'react'
import { Container, CircularProgress } from '@mui/material'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { AuthProvider } from './common/auth/AuthContext'

import ProtectedRoute from './components/protected-route'
import Navbar from './components/navbar'
import Footer from './components/footer'

const Home = lazy(() => import('./pages/home'))
const Profile = lazy(() => import('./pages/profile'))
const AdminDashboard = lazy(() => import('./pages/admin-dashboard'))

const App = () => {
    return (
        <Suspense fallback={<CircularProgress />}>
            <AuthProvider>
                <Router>
                    <Navbar />
                    <Container maxWidth="xl">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <ProtectedRoute
                                path="/profile"
                                component={Profile}
                            />
                            <ProtectedRoute
                                path="/admin/dashboard"
                                component={AdminDashboard}
                                admin
                            />
                        </Switch>
                    </Container>
                </Router>
            </AuthProvider>

            <Footer />
        </Suspense>
    )
}

export default App
