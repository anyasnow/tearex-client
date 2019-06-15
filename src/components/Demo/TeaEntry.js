import React, { Component } from 'react'

class TeaEntry extends Component {

    state = {
        isEdit: false
    };

    render() {
        return (
            <>
                <h3>{this.props.teaName}</h3>
                <img src="https://via.placeholder.com/40.png?text=black tea icon" alt="black tea icon" />
                <p><b>Type:</b> {this.props.type}</p>
                <p><b>Brand:</b> {this.props.brand}</p>
                <p><b>Packaging:</b> {this.props.packaging}</p>
                <p><b>Notes:</b> {this.props.notes}</p>

                <button onClick={() => { this.props.editTea(this.props.teaName) }}>Edit</button>

                <button onClick={() => { this.props.deleteTea(this.props.teaName) }}>Delete</button>
            </>
        )
    }
}

export default TeaEntry