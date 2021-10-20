import { Suspense, lazy } from "react";
import { Container, CircularProgress } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./common/auth/AuthContext";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Home = lazy(() => import("./pages/home"));

const App = () => {
    return (
        <Container maxWidth="xl">
            <AuthProvider>
                <Navbar />

                <Router>
                    <Suspense fallback={<CircularProgress />}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </Suspense>
                </Router>
            </AuthProvider>

            <Footer />
        </Container>
    );
};

export default App;
