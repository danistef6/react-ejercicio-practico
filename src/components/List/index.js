import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Creators as ComicActions } from '../../actions/actions';
import CardItem from './components/CardItem';
import { Container } from './styles';

class List extends Component {
    static propTypes = {
        addComicsRequest: PropTypes.func.isRequired,
        comics: PropTypes.shape({}).isRequired,
    };

    componentDidMount() {
        this.loadComics();
    }

    loadComics = () => {
        const { addComicsRequest } = this.props;
        addComicsRequest();
    };

    render() {
        const {
            comics: { data },
        } = this.props;
        return (
            <>
                <Container>
                    {data.length ? (
                        <InfiniteScroll
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                margin: '40px',
                            }}
                            dataLength={data.length}
                            next={() => this.loadComics()}
                            hasMore
                            loader={<h4 style={{ color: 'white' }}>Loading...</h4>}
                        >
                            {data.map(item => (
                                    <CardItem data={item} />
                            ))}
                        </InfiniteScroll>
                    ) : (
                        <h1 style={{ color: 'white' }}>Cargando....</h1>
                    )}
                </Container>
            </>
        );
    }
}

const mapStateToProps = state => ({
    comics: state.comics,
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...ComicActions,
    },
    dispatch,
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(List);
