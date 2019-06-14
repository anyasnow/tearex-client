import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Demo from './components/Demo/Demo';
import Nav from './components/Nav/Nav';
import Signup from './components/Signup/Signup'
import NotFound from './components/NotFound';
import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import './App.css'


class App extends React.Component {
    render() {
        return (

            <BrowserRouter>
                <>
                    <Nav />
                    <Header />
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/demo" component={Demo} />
                        <Route exact path="/login" component={Login} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </>
            </BrowserRouter >)
    }


}


export default App;