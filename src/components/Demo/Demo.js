import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TeaList from './TeaList';
import AddTea from './AddTeaForm';
import dummyData from './dummyData';

import './Demo.css';


class Demo extends Component {

    state = { teas: dummyData };

    componentWillMount = () => {

        const teas = this.state.teas;
        this.setState({ teas });
        (console.log(teas))
    }


    addTea = tea => {
        this.setState({ teas: [tea, ...this.state.teas] });
    }



    editTea = (id, teaName, brand, type, packaging, notes) => {
        console.log('id', id)

        let currentTeas = this.state.teas
        let newTeas = currentTeas.map(tea => {
            if (tea.id === id) {
                tea.teaName = teaName;
                tea.brand = brand;
                tea.type = type;
                tea.packaging = packaging;
                tea.notes = notes;
            }
            console.log(tea)
            return tea
        });


        this.setState({ teas: newTeas });



    }

    deleteTea = teaName => {
        const teas = this.state.teas;

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
                <AddTea addTea={this.addTea} />
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

export default Demo