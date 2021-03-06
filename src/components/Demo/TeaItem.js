import React, { Component } from 'react'


class TeaItem extends Component {

    state = {
        isEdit: false,
        teaname: this.props.teaname,
        brand: this.props.brand,
        type: this.props.type,
        packaging: this.props.packaging,
        notes: this.props.notes,
        id: this.props.id
    }


    onEdit = () => {
        this.setState({
            isEdit: true,
            teaname: this.props.teaname,
            brand: this.props.brand,
            type: this.props.type,
            packaging: this.props.packaging,
            notes: this.props.notes,
            id: this.props.id
        });
    }

    onEditSubmit = e => {

        const { id, teaname, brand, type, packaging, notes } = this.state;
        e.preventDefault();
        console.log('teaItemState', this.state);
        this.props.editTea(id, teaname, brand, type, packaging, notes);
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
                                <label htmlFor="teaname">Name</label>
                                <input type="text" id="teaname" name="teaname" value={this.state.teaname} onChange={this.handleChange} required />
                            </div>

                            <div className="form-section">
                                <label htmlFor="brand">Brand/Company/Origin</label>
                                <input type="text" id="brand" name="brand" value={this.state.brand} onChange={this.handleChange} />
                            </div>

                            <div className="form-section">
                                <label htmlFor="type">Type</label>
                                <select className="type" id="type" value={this.state.type} name="type" onChange={this.handleChange}>
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
                                <textarea id="notes" name="notes" value={this.state.notes} onChange={this.handleChange} rows="5"
                                    cols="30"></textarea>
                            </div>

                            <input type="submit" value="Update" id="button" />

                        </form>)
                        : (<>
                            <h3>{this.props.teaname}</h3>
                            <img src="https://via.placeholder.com/40.png?text=black tea icon" alt="black tea icon" />
                            <p><b>Type:</b> {this.props.type}</p>
                            <p><b>Brand:</b> {this.props.brand}</p>
                            <p><b>Packaging:</b> {this.props.packaging}</p>
                            <p><b>Notes:</b> {this.props.notes}</p>
                            <div className="edit-delete">
                                <button onClick={this.onEdit}>Edit</button>

                                <button onClick={() => { this.props.deleteTea(this.props.id) }}>Delete</button>
                            </div>
                        </>)
                }


            </>
        )
    }
}

export default TeaItem