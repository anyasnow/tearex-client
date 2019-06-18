import React, { Component } from 'react'


class TeaItem extends Component {

    state = {
        isEdit: false,
        teaName: this.props.teaName,
        brand: this.props.brand,
        type: this.props.type,
        packaging: this.props.packaging,
        notes: this.props.notes,
        id: this.props.id
    }


    onEdit = () => {
        this.setState({
            isEdit: true,
            teaName: this.props.teaName,
            brand: this.props.brand,
            type: this.props.type,
            packaging: this.props.packaging,
            notes: this.props.notes,
            id: this.props.id
        });
    }

    onEditSubmit = e => {

        const { id, teaName, brand, type, packaging, notes } = this.state;
        e.preventDefault();
        console.log('teaItemState', this.state);
        this.props.editTea(id, teaName, brand, type, packaging, notes);
        this.setState({ isEdit: false })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {


        return (
            <>
                {
                    this.state.isEdit
                        ? (<form id="form" onSubmit={this.onEditSubmit} >

                            <div className="form-section">
                                <label htmlFor="teaName">What's your latest tea addition?</label>
                                <input type="text" id="teaName" name="teaName" value={this.state.teaName} onChange={this.handleChange} required />
                            </div>

                            <div className="form-section">
                                <label htmlFor="brand">Brand/Company/Origin</label>
                                <input type="text" id="brand" name="brand" value={this.state.brand} onChange={this.handleChange} />
                            </div>

                            <div className="form-section">
                                <label htmlFor="type">Type * = considered "true" tea, but Tea Rex loves all kinds!</label>
                                <select className="type" id="type" value={this.state.type} name="type" onChange={this.handleChange}>
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
                                <fieldset onChange={this.handleChange} value={this.state.packaging} id="packaging">
                                    <input type="radio" name="packaging" value="Loose Leaf" />
                                    <label htmlFor="loose" id="packaging">Loose Leaf</label>
                                    <input type="radio" name="packaging" value="Tea Bag" />
                                    <label htmlFor="bag" id="packaging">Tea Bag</label>
                                </fieldset>
                            </div>

                            <div className="form-section">
                                <label htmlFor="notes">Notes</label>
                                <textarea id='enter notes' name="notes" value={this.state.notes} onChange={this.handleChange} rows="5"
                                    cols="30">Tasting notes, recipes, where to buy, health benefits, etc</textarea>
                            </div>

                            <input type="submit" value="Update" id="button" />

                        </form>)
                        : (<>
                            <h3>{this.props.teaName}</h3>
                            <img src="https://via.placeholder.com/40.png?text=black tea icon" alt="black tea icon" />
                            <p><b>Type:</b> {this.props.type}</p>
                            <p><b>Brand:</b> {this.props.brand}</p>
                            <p><b>Packaging:</b> {this.props.packaging}</p>
                            <p><b>Notes:</b> {this.props.notes}</p>

                            <button onClick={this.onEdit}>Edit</button>

                            <button onClick={() => { this.props.deleteTea(this.props.id) }}>Delete</button> </>)
                }


            </>
        )
    }
}

export default TeaItem