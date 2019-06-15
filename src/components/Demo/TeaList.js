import React from 'react';
import TeaEntry from './TeaEntry';


const TeaList = props => {
    const allTeas = props.teas.map(tea => {
        return (
            < div className="demo-element" key={tea.teaName} >
                <TeaEntry
                    teaName={tea.teaName}
                    brand={tea.brand}
                    type={tea.type}
                    packaging={tea.packaging}
                    notes={tea.notes}
                    deleteTea={props.deleteTea}
                    editTea={props.editTea}
                    teas={props.teas}
                />
            </div >
        );
    });

    return (
        <>
            {allTeas}
        </>
    )
}


export default TeaList