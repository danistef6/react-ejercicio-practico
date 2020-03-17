import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import CardItem from './components/CardItem';
import { Container } from './styles';

class List extends Component {
    static propTypes = {
        addComicsRequest: PropTypes.func.isRequired,
        comics: PropTypes.shape({}).isRequired,
    };
    constructor(props){super(props)};
    render() {
        const {
            comics: { data },
        } = this.props;
        console.log(this.props);
        return (
            <>
                <Container>
                    {data.length ? (
                        <div>
                            {data.map(item => (
                                    <CardItem data={item} />
                            ))}
                        </div>
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

export default connect(
    mapStateToProps,
)(List);
