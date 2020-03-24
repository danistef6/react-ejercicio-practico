import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardItem from './components/CardItem';
import { Container } from './styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from "react-router-dom";

class List extends Component {
    static propTypes = {
        comics: PropTypes.shape({}).isRequired,
    };
    render() {
        const {
            comics: { data, fetching },
        } = this.props;
        console.log("Estas son las props",this.props);
        console.log("Respuesta de fetching",fetching);
        return (
            <>
            {fetching===true ? 
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        image={'https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-32.gif'}
                        title={data.resourceURI}
                    />
                </CardActionArea>: null
            }
                <Container>
                    {data.length ? (
                        <div>
                            {data.map(item => (
                                    <Link to={`/Detail/${item.id}`} target="_blank" key={item.id}>
                                    <CardItem data={item} />
                                    </Link>
                            ))}
                        </div>
                    ) : (
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={'https://1.bp.blogspot.com/-j2IiGUcUkSI/XFIK2fT7wOI/AAAAAAAB2GQ/Lo0-g2Z5AYQBtx24rlpIcBPbqbJwdUEDACLcBGAs/s640/2.gif'}
                                title={data.resourceURI}
                            />
                        </CardActionArea>
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
