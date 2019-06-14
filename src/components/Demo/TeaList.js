import React, { Component } from 'react';



const TeaEntry = (props) => {
    console.log(props)
    return (
        < div className="demo-element" >
            <h3>{props.teaName}</h3>
            <img src="https://via.placeholder.com/40.png?text=black tea icon" alt="black tea icon" />
            <p><b>Type:</b> {props.type}</p>
            <p><b>Brand:</b> {props.brand}</p>
            <p><b>Packaging:</b> {props.packaging}</p>
            <p><b>Notes:</b> {props.notes}</p>
        </div >

    )
}

const ListAllTeas = props => {
    const allTeas = props.teas.map((object, index) => {
        return (
            < div className="demo-element" key={index}>
                <TeaEntry
                    teaName={object.teaName}
                    brand={object.brand}
                    type={object.type}
                    packaging={object.packaging}
                    notes={object.notes}

                />
                <button onClick={() => { props.deleteTea(index) }}>Delete</button>
            </div>
        );
    });

    return (
        <>
            <h2>My Tea Inventory</h2>
            <ul>
                {allTeas}
            </ul>
        </>
    )
}

class TeaList extends Component {
    render() {

        return (


            <ListAllTeas teas={this.props.teas} deleteTea={this.props.deleteTea} />

        );
    }
}

export default TeaList;