import React from 'react';
import { compose } from 'recompose'
import { connect } from 'react-redux'
import List from '../../List';
import Header from '../../Header';
import FilterBar from '../../FilterBar';
import { addComicsRequest} from '../../../actions/actions';

const Main = ({handleSearchComics, comics}) => (
    <>
        <FilterBar handleSearchComics={handleSearchComics} />
        <Header />
        <List comics ={comics}/>
    </>
);

function mapStateToProps(state) {
    return {
        comics: state.comics
    }
  }
  
  const reduxState = connect(
    mapStateToProps,
    {
      handleSearchComics: addComicsRequest,
    }
  )
  
  export default compose(reduxState)(Main)
