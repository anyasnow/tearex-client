import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TeaList from './TeaList';
import Form from './Form';
import dummyData from './dummyData';
import './Demo.css';

const teas = dummyData

localStorage.setItem('teas', JSON.stringify(teas));

class Demo extends Component {

    state = { teas: JSON.parse(localStorage.getItem('teas')) };

    componentWillMount = () => {

        const teas = this.getTeas();
        this.setState({ teas });
    }

    getTeas = () => {
        return this.state.teas;

    }

    addTea = tea => {
        this.setState({ teas: [tea, ...this.state.teas] });
    }

    // editTea = teaName => {
    //     let teas = this.getTeas();

    //     this.setState({
    //         teas: teas.map(tea => {
    //             if (tea.teaName === teaName) {
    //                 tea.value = value;
    //             }

    //             return tea
    //         })
    //     })
    // }

    deleteTea = teaName => {
        const teas = this.getTeas();

        this.setState({
            teas: teas.filter(tea => {
                return tea.teaName !== teaName
            })
        });
    }

    render() {

        return (
            < div className="demo" >
                <h2>Add New Tea</h2>
                <Form addTea={this.addTea} />
                < h2 > My Tea Inventory</h2 >
                <TeaList
                    teas={this.state.teas}
                    deleteTea={this.deleteTea}
                    editTea={this.editTea}
                />
                <p> Want to be able to save your collection? <Link to="/signup">Sign up</Link> for an account!</p>

            </div >
        )
    }
}