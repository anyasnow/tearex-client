import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Demo from './components/Demo';
import Nav from './components/Nav';
import Signup from './components/Signup'
import NotFound from './components/NotFound';
import About from './components/About';

class App extends React.Component {
    render() {
        return (

            <BrowserRouter>
                <>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/demo" component={Demo} />
                        <Route exact path="/login" component={Login} />
                        <Route component={NotFound} />
                    </Switch>
                </>
            </BrowserRouter >)
    }


}


export default App;