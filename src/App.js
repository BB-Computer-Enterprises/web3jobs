import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import routes from './config/routes';

function generateRoutes(){
    return routes.map( route => {
        return(
            <Route
                path={route.path}
                component={route.component}
                key={Date.now()}
            />
        )
    })
}

function App() {
    return (
        <Router forceRefresh={true}>
            <Header />
            <Switch>
                {generateRoutes()}
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;