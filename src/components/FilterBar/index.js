import React from 'react';
import {Formik, Field} from 'formik';
import { useDispatch } from 'react-redux';
import { Creators as ComicActions } from '../../actions/actions';

const labelStyle = {'color': 'red'}
const divStyle = {'margin':'0 auto',
                  'height': '60px',
                  'width': '400px',
                  'display': 'flex',
                  'justify-content': 'space-between',
                  'align-items': 'center'}

const FilterBar = () =>{
    const dispatch = useDispatch();
    return(
    <div>
        <Formik
        initialValues = {{ buscar: ''}}
        onSubmit={(values, {setSubmitting}) => {
           alert(JSON.stringify(values,null,2));
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
                        <button type="submit" onClick= {()=>dispatch(ComicActions.addComicsRequest(values.buscar))}>
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