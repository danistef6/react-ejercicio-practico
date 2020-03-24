import React, { useEffect } from 'react'
import {Formik} from 'formik';
import {useParams} from "react-router-dom";
import { connect } from 'react-redux';
import CardMedia from '@material-ui/core/CardMedia';

const labelStyle = {'color': 'red',   	
                    'font': '900 3em/1 "Oswald", sans-serif'}
const divStyle = {'margin':'0 auto',
                  'height': '60px',
                  'width': '400px',
                  'display': 'flex',
                  'justify-content': 'space-between',
                  'align-items': 'center',
                  'flex-direction': 'column'}

const DetailPage = ({handleSearchComics,details}) =>{

    let  id  = useParams();
    useEffect(() => {
        function searchComics() {
            handleSearchComics(id.Id);
        }
      
        searchComics();
      }, [handleSearchComics,id.Id]);

      console.log("Esto trae el store" , details);
    return(
    <div>
        <Formik>
            {({
                handleSubmit
            }) => (
                <form onSubmit={handleSubmit}>
                    <div style={divStyle}>
                    <label style={labelStyle} >{details.data.name} </label>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="500"
                    image={`${details.data.thumbnail}.${details.data.extension}`}
                    title={details.data.resourceURI}
                />
                    </div>
                </form>
            )}          
        </Formik>
    </div>
    );
};

const mapStateToProps = state => ({
    details: state.details,
});

export default connect(
    mapStateToProps,
)(DetailPage);