import React, { Component } from 'react';
import TeaList from './TeaList';
import Form from './Form';
import './Demo.css';
import { Link } from 'react-router-dom';

class App extends Component {
    state = {
        teas: []
    };

    deleteTea = index => {

        const { teas } = this.state;

        this.setState({
            teas: teas.filter((tea, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = tea => {
        this.setState({ teas: [...this.state.teas, tea] });
    }

    render() {
        const { teas } = this.state;

        return (

            <div className="demo">
                <h2>Add New Tea</h2>
                <Form handleSubmit={this.handleSubmit} />
                <TeaList
                    teas={teas}
                    deleteTea={this.deleteTea}
                />
                <p> Want to be able to save your collection? <Link to="/signup">sign up</Link> for an account!</p>

            </div>
        );
    }
}

export default App;