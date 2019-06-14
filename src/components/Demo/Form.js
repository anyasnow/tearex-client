import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            teaName: '',
            brand: '',
            type: '',
            packaging: '',
            notes: ''
        };

        this.state = this.initialState;
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { teaName, brand, type, packaging, notes } = this.state;

        return (

            <form id="form" onSubmit={this.onFormSubmit} >

                <div className="form-section">
                    <label htmlFor="teaName">What's your latest tea addition?</label>
                    <input type="text" name="teaName" value={teaName} onChange={this.handleChange} required />
                </div>

                <div className="form-section">
                    <label htmlFor="brand">Brand/Company/Origin</label>
                    <input type="text" name="brand" value={brand} onChange={this.handleChange} />
                </div>

                <div className="form-section">
                    <label htmlFor="type">Type * = considered "true" tea, but Tea Rex loves all kinds!</label>
                    <select className="type" value={type} name="type" onChange={this.handleChange}>
                        <option value="">-- choose one --</option>
                        <optgroup label="BLACK">
                            <option value="Black">Black*</option>
                            <option value="Chai">Chai</option>
                            <option value="Black Flavored">Black Flavored</option>
                        </optgroup>
                        <optgroup label="GREEN">
                            <option value="Green">Green*</option>
                            <option value="Sencha">Sencha</option>
                            <option value="Matcha">Matcha</option>
                            <option value="Green Flavored">Green Flavored</option>
                        </optgroup>
                        <optgroup label="HERBAL">
                            <option value="Herbal">Herbal</option>
                            <option value="Mate">Mate</option>
                            <option value="Rooibos">Rooibos</option>
                        </optgroup>
                        <optgroup label="WHITE">
                            <option value="White">White*</option>
                        </optgroup>
                        <optgroup label="OOLONG">
                            <option value="Oolong">Oolong*</option>
                        </optgroup>
                        <optgroup label="PU-ERH">
                            <option value="Pu-erh">Pu-erh*</option>
                        </optgroup>
                        <optgroup label="OTHER">
                            <option value="Blend">Blend</option>
                            <option value="Other">Other</option>
                        </optgroup>
                    </select>
                </div>

                <div className="form-section">
                    <label htmlFor="packaging">Packaging</label>
                    <fieldset onChange={this.handleChange} value={packaging}>
                        <input type="radio" name="packaging" value="Loose Leaf" />
                        <label htmlFor="loose">Loose Leaf</label>
                        <input type="radio" name="packaging" value="Tea Bag" />
                        <label htmlFor="bag">Tea Bag</label>
                    </fieldset>
                </div>

                <div className="form-section">
                    <label htmlFor="notes">Notes</label>
                    <textarea name="notes" value={notes} onChange={this.handleChange} rows="5"
                        cols="50">Tasting notes, recipes, where to buy, health benefits, etc</textarea>
                </div>

                <input type="submit" value="Add Tea" id="submitbutton" />

            </form>
        );
    }
}

export default Form;