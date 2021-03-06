import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TeaList from './TeaList';
import AddTeaForm from './AddTeaForm';
import config from '../.././config';
import TokenService from '../../services/TokenService';
import jwtDecode from 'jwt-decode';
import './Demo.css';


class Demo extends Component {

    state = { teas: [] };

    componentDidMount = () => {
        const authToken = TokenService.getAuthToken();
        const decoded = jwtDecode(authToken);
        fetch(`${config.API_ENDPOINT}/teas/${decoded.user_id}`, {
            headers: { 'authorization': `bearer ${TokenService.getAuthToken()}` }
        })
            .then(res => res.json())
            .then(resJson => {
                this.setState({ teas: resJson })  //in GET the resJson is the WHOLE INVENTORY
            })
        // .then(res => {
        //     if (!res.ok) {
        //         return res.json().then(error => Promise.reject(error))
        //     }
        //     return res.json()
        // })

    }

    addTea = tea => {
        const authToken = TokenService.getAuthToken();
        const decoded = jwtDecode(authToken);
        fetch(`${config.API_ENDPOINT}/teas/${decoded.user_id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            'authorization': `bearer ${TokenService.getAuthToken()}`,
            body: JSON.stringify(tea)
        })
            // .then(console.log('newtea', tea)) //'tea' is just the user input, before communicating with server

            // .then(resJson => console.log('rj', resJson)) //in POST the resJson is THE NEW TEA with ID added - after communicating with server
            .then(res => res.json())
            .then(resJson => {
                this.setState({ teas: [...this.state.teas, resJson] })
            })
            .catch((err) => console.log(err))
    }


    editTea = (id, teaname, brand, type, packaging, notes) => {

        const newTea = { teaname, brand, type, packaging, notes };
        const authToken = TokenService.getAuthToken();
        const decoded = jwtDecode(authToken);
        fetch(`${config.API_ENDPOINT}/teas/${decoded.user_id}/${id}`, {
            method: 'PATCH',
            'authorization': `bearer ${TokenService.getAuthToken()}`,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTea),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )

            .then(console.log('teas after patch', this.state.teas))
            .then(() => {
                let updatedTeas = this.state.teas.map(tea => {
                    if (tea.id === id) {
                        return Object.assign({}, tea, newTea);
                    }
                    return tea
                })
                console.log('teas after map', updatedTeas)
                this.setState({ teas: updatedTeas });
            })
    }



    deleteTea = (id) => {
        const authToken = TokenService.getAuthToken();
        const decoded = jwtDecode(authToken);
        fetch(`${config.API_ENDPOINT}/teas/${decoded.user_id}/${id}`, {
            method: 'DELETE',
            'authorization': `bearer ${TokenService.getAuthToken()}`,
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(console.log('teas after delete', this.state.teas))
            .then(() => {
                let filteredTeas = this.state.teas.filter(tea => {
                    if (tea.id !== id) {
                        return tea
                    }
                })
                // console.log('teas after filter', filteredTeas)
                this.setState({ teas: filteredTeas })
            })
    }




    render() {
        console.log('fetch teas', this.state.teas)
        return (

            <>
                <div className="demoparent">

                    <div className="demochild">
                        <h2>Add New Tea</h2>
                        <AddTeaForm addTea={this.addTea} />

                    </div>
                </div>

                <div className="demoparent">

                    <div className="demochild">
                        < h2 > My Tea Inventory ({this.state.teas.length})</h2 >
                        <TeaList
                            teas={this.state.teas}
                            deleteTea={this.deleteTea}
                            editTea={this.editTea}
                        />
                    </div>
                </div>


            </ >
        )
    }
}

export default Demo