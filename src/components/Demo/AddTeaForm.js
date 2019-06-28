import React, { Component } from 'react';



class AddTeaForm extends Component {

    state = {
        teaname: '',
        brand: '',
        type: '',
        packaging: '',
        notes: '',
        id: ''

    };

    clearForm = () => {
        this.setState({
            teaname: '',
            brand: '',
            type: '',
            packaging: '',
            notes: '',
            id: ''

        });
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onAddSubmit = (e) => {
        e.preventDefault();
        this.props.addTea(this.state);
        this.clearForm()
    }

    render() {
        const { teaname, brand, type, packaging, notes } = this.state;

        return (

            <form id="form" onSubmit={this.onAddSubmit} >

                <div className="form-section">
                    <label htmlFor="teaname">Name</label>
                    <input type="text" name="teaname" id="teaname" value={teaname} onChange={this.handleChange} required />
                </div>

                <div className="form-section">
                    <label htmlFor="brand">Brand/Company/Origin</label>
                    <input type="text" name="brand" value={brand} onChange={this.handleChange} />
                </div>

                <div className="form-section">
                    <label htmlFor="type">Type</label>
                    <select className="type" aria-label='select type of tea' value={type} name="type" onChange={this.handleChange}>
                        <option value="">-- choose one --</option>
                        <optgroup label="True Teas">
                            <option value="Black">Black</option>
                            <option value="Green">Green</option>
                            <option value="White">White</option>
                            <option value="Oolong">Oolong</option>
                            <option value="Pu-erh">Pu-erh</option>
                        </optgroup>
                        <optgroup label="Technically not Teas">
                            <option value="Herbal">Herbal</option>
                            <option value="Flavored">Flavored</option>
                            <option value="Blend">Blend</option>
                            <option value="Other">Other</option>
                        </optgroup>
                    </select >
                </div >

                <div className="form-section">
                    <label htmlFor="packaging">Packaging</label>
                    <fieldset onChange={this.handleChange} value={packaging} aria-label='select packaging'>
                        <input type="radio" name="packaging" value="Loose Leaf" />
                        <label htmlFor="loose" id="radio-btn">Loose Leaf</label>
                        <input type="radio" name="packaging" value="Tea Bag" />
                        <label htmlFor="bag" id="radio-btn">Tea Bag</label>
                    </fieldset>
                </div>

                <div className="form-section">
                    <label htmlFor="notes">Notes</label>
                    <textarea aria-label='enter notes' name="notes" value={notes} onChange={this.handleChange} rows="5"
                        cols="30">Tasting notes, recipes, where to buy, health benefits, etc</textarea>
                </div>

                <input type="submit" value="Add Tea" id="button" />

            </form >
        );
    }
}

export default AddTeaForm;