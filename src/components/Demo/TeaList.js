import React from 'react';
import TeaItem from './TeaItem';


const TeaList = props => {
    const allTeas = props.teas.map(tea => {
        return (

            < div className="demo-element" key={tea.id} >
                <TeaItem
                    teaname={tea.teaname}
                    brand={tea.brand}
                    type={tea.type}
                    packaging={tea.packaging}
                    notes={tea.notes}
                    id={tea.id}
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