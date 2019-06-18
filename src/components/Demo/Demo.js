import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TeaList from './TeaList';
import AddTeaForm from './AddTeaForm';
import dummyData from './dummyData';

import './Demo.css';


class Demo extends Component {

    state = { teas: dummyData };

    componentWillMount = () => {

        const teas = this.state.teas;

        this.setState({ teas });
        (console.log('teas', teas))
    }


    addTea = tea => {
        this.setState({ teas: [tea, ...this.state.teas] });
    }



    editTea = (id, teaName, brand, type, packaging, notes) => {
        console.log('editid', id)
        let currentTeas = this.state.teas;
        console.log('currentTeasEdit', currentTeas)
        let newTeas = currentTeas.map(tea => {
            if (tea.id === id) {
                tea.teaName = teaName;
                tea.brand = brand;
                tea.type = type;
                tea.packaging = packaging;
                tea.notes = notes;
            }
            return tea
        });
        this.setState({ teas: newTeas });
    }

    deleteTea = (brand) => {
        console.log('delid', brand)
        let currentTeas = this.state.teas;
        (console.log('currentdelteas', currentTeas))
        let filteredTeas = currentTeas.filter(tea => {
            console.log(tea.id)
            return tea.id !== brand
        })
        console.log('ft', filteredTeas)

        this.setState({ teas: filteredTeas });
    };


    render() {

        return (
            < div className="demo" >
                <h2>Add New Tea</h2>
                <AddTeaForm addTea={this.addTea} />
                < h2 > My Tea Inventory ({this.state.teas.length})</h2 >
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