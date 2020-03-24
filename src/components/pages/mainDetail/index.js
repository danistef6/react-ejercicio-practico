/*import React from 'react';
import { compose } from 'recompose'
import { connect } from 'react-redux'
import Detail from '../../Detail';
import { addComicsRequest} from '../../../actions/actions';

const MainDetail = ({handleSearchComics, comics}) => (
  <>
      <Detail comics ={comics}/>
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

export default compose(reduxState)(MainDetail)*/

import React from 'react';
import { compose } from 'recompose'
import { connect } from 'react-redux'
import Detail from '../../Detail';
import { addDetailRequest} from '../../../actions/actionsDetail';

const Main = ({handleSearchComics}) => (
    <>
        <Detail handleSearchComics={handleSearchComics} />
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
      handleSearchComics: addDetailRequest,
    }
  )
  
  export default compose(reduxState)(Main)

