import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../duck';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        this.props.getUser();
        this.props.getFavorites();
    }

    render() {
        return (
            <div className='Dashboard'>
                <div className='content'>
                    <div className='header'>Dashboard</div>
                    <div className='categories'>
                        <div className='category-row'>
                            <div className='category'>
                                <div className='category-header'>Events</div>
                            </div>
                            <div className='category'>
                                <div className='category-header'>Requests</div>
                            </div>
                        </div>
                        <div className='category-row'>
                            <div className='category'>
                                <div className='category-header'>Recent Apps</div>
                            </div>
                            <div className='category'>
                                <div className='category-header'>Favorites</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        favorites: state.favorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(actions.getUser()),
        getFavorites: () => dispatch(actions.getFavorites())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);