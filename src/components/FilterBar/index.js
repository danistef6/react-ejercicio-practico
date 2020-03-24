import React from 'react';
import {Formik, Field} from 'formik';
import {FormattedMessage} from 'react-intl';

const labelStyle = {'color': 'red',   	
                    'font': '900 3em/1 "Oswald", sans-serif'}
const divStyle = {'margin':'0 auto',
                  'height': '100px',
                  'width': '900px',
                  'display': 'flex',
                  'justify-content': 'space-between',
                  'align-items': 'center'}
const searchStyle ={'box-sizing': 'content-box',
                    'height': '30px',
                    'padding': '0 250px 0 10px',
                    'border-color': '#888',
                    'border-radius': '35px',
                    'border-style': 'solid',
                    'border-width': '5px'}
                    
const buttonStyle ={'text-transform':'uppercase',
                    'padding':'10px 20px',
                    'color':'red',
                    'border-radius':'75px'}

const FilterBar = ({handleSearchComics}) =>{
    return(
    <div>
        <Formik
        initialValues = {{ buscar: ''}}
        onSubmit={(values) => {
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
                    <p style={labelStyle} >
                    <FormattedMessage id="FilterBar.titulo"
                      defaultMessage="Digite un personaje:"
                      description="Digite un personaje:"/>
                    </p>
                        <Field
                        style={searchStyle}
                        type="text"
                        name="buscar"
                        value={values.buscar}
                        />
                    <button style={buttonStyle} id="button" type="submit" >
                    <FormattedMessage id="FilterBar.button"
                      defaultMessage="Buscar"
                      description="Buscar"/>
                    </button>
                    </div>
                </form>
            )}          
        </Formik>
    </div>
    );
};

export default FilterBar;