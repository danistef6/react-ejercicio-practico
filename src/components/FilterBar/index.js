import React from 'react';
import {Formik, Field} from 'formik';

const labelStyle = {'color': 'red'}
const divStyle = {'margin':'0 auto',
                  'height': '60px',
                  'width': '400px',
                  'display': 'flex',
                  'justify-content': 'space-between',
                  'align-items': 'center'}

const FilterBar = ({handleSearchComics}) =>{
    return(
    <div>
        <Formik
        initialValues = {{ buscar: ''}}
        onSubmit={(values, {}) => {
            console.log('consulto',values);
            handleSearchComics(values.buscar);
        }}
        >
            {({
                values,
                handleSubmit
            }) => (
                <form onSubmit={handleSubmit}>
                    <div style={divStyle}>
                        <label style={labelStyle} >Digite un personaje: </label>
                        <Field
                        type="text"
                        name="buscar"
                        value={values.buscar}
                        />
                        <button type="submit">               
                        Buscar
                        </button>
                    </div>
                </form>
            )}          
        </Formik>
    </div>
    );
};

export default FilterBar;