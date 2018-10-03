import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selected: 'dashboard',
            isHidden: null,
        }
    }

    handleChange(obj) {
        this.setState(obj);
    }

    render() {
        return (
            <div>
                <div className='NavBar'>
                    <div
                        className='navRoute'
                        style={this.state.selected === 'account' ? { 'backgroundColor': 'white' } : { 'backgroundColor': '#C0392B' }}
                        onClick={() => this.handleChange({ selected: 'account', IsHidden: 'account' })}
                    >
                        <div className='navExtend' style={this.state.selected === 'account' ? { 'color': '#C0392B' } : { 'color': 'white' }}>
                            <img src={this.state.selected === 'account' ? require('../icons/male-user-50-RED.png') : require('../icons/male-user-50-WHITE.png')} alt='account' width='35px' />
                            <span>Account</span>
                        </div>
                    </div>
                    <div
                        className='navRoute'
                        style={this.state.selected === 'dashboard' ? { 'backgroundColor': 'white' } : { 'backgroundColor': '#C0392B' }}
                        onClick={() => this.handleChange({ selected: 'dashboard', IsHidden: null })}
                    >
                        <Link to='/' style={this.state.selected === 'dashboard' ? { 'color': '#C0392B' } : { 'color': 'white' }}>
                            <div className='linkContent'>
                                <img src={this.state.selected === 'dashboard' ? require('../icons/speed-50-RED.png') : require('../icons/speed-50-WHITE.png')} alt='dashboard' width='35px' />
                                <span>Dashboard</span>
                            </div>
                        </Link>
                    </div>
                    <div
                        className='navRoute'
                        style={this.state.selected === 'inbox' ? { 'backgroundColor': 'white' } : { 'backgroundColor': '#C0392B' }}
                        onClick={() => this.handleChange({ selected: 'inbox', IsHidden: null })}
                    >
                        <Link to='/inbox' style={this.state.selected === 'inbox' ? { 'color': '#C0392B' } : { 'color': 'white' }}>
                            <div className='linkContent'>
                                <img src={this.state.selected === 'inbox' ? require('../icons/inbox-50-RED.png') : require('../icons/inbox-50-WHITE.png')} alt='inbox' width='35px' />
                                <span>Inbox</span>
                            </div>
                        </Link>
                    </div>
                    <div
                        className='navRoute'
                        style={this.state.selected === 'calendar' ? { 'backgroundColor': 'white' } : { 'backgroundColor': '#C0392B' }}
                        onClick={() => this.handleChange({ selected: 'calendar', IsHidden: null })}
                    >
                        <Link to='/calendar' style={this.state.selected === 'calendar' ? { 'color': '#C0392B' } : { 'color': 'white' }}>
                            <div className='linkContent'>
                                <img src={this.state.selected === 'calendar' ? require('../icons/calendar-50-RED.png') : require('../icons/calendar-50-WHITE.png')} alt='calendar' width='35px' />
                                <span>Calendar</span>
                            </div>
                        </Link>
                    </div>
                    <div
                        className='navRoute'
                        style={this.state.selected === 'friends' ? { 'backgroundColor': 'white' } : { 'backgroundColor': '#C0392B' }}
                        onClick={() => this.handleChange({ selected: 'friends', IsHidden: null })}
                    >
                        <Link to='/friends' style={this.state.selected === 'friends' ? { 'color': '#C0392B' } : { 'color': 'white' }}>
                            <div className='linkContent'>
                                <img src={this.state.selected === 'friends' ? require('../icons/user-groups-50-RED.png') : require('../icons/user-groups-50-WHITE.png')} alt='friends' width='35px' />
                                <span>Friends</span>
                            </div>
                        </Link>
                    </div>
                    <div
                        className='navRoute'
                        style={this.state.selected === 'apps' ? { 'backgroundColor': 'white' } : { 'backgroundColor': '#C0392B' }}
                        onClick={() => this.handleChange({ selected: 'apps', IsHidden: 'apps' })}
                    >
                        <div className='navExtend' style={this.state.selected === 'apps' ? { 'color': '#C0392B' } : { 'color': 'white' }}>
                            <img src={this.state.selected === 'apps' ? require('../icons/books-50-RED.png') : require('../icons/books-50-WHITE.png')} alt='apps' width='35px' />
                            <span>Apps</span>
                        </div>
                    </div>
                </div>
                {this.state.IsHidden === 'apps' && <AppExtend handleChange={this.handleChange} />}
                {this.state.IsHidden === 'account' && <AccountExtend handleChange={this.handleChange} />}
            </div>
        );
    }
}

const AccountExtend = (props) => {
    return (
        <div className='extend'>
            <button><a href={'/logout'}>LOGOUT</a></button>
            <button><a href={'http://localhost:3007/login'}>LOGIN</a></button>
        </div>
    )
}

const AppExtend = (props) => {
    return (
        <div className='extend'>
            <Link to='/apps'>
                <button className='app' onClick={() => props.handleChange({ IsHidden: null })}>
                    Monster Manual
                </button>
            </Link>
            <Link to='/apps/spellbook'>
                <button className='app' onClick={() => props.handleChange({ IsHidden: null })}>
                    Spell Book
                </button>
            </Link>
            <Link to='/apps/itemlist'>
                <button className='app' onClick={() => props.handleChange({ IsHidden: null })}>
                    Item List
                </button>
            </Link>
            <button className='app' onClick={() => props.handleChange({ IsHidden: null })}>
                Character Creator
            </button>
            <button className='app' onClick={() => props.handleChange({ IsHidden: null })}>
                Monster Creator
            </button>
            <button className='app' onClick={() => props.handleChange({ IsHidden: null })}>
                Spell Creator
            </button>
            <button className='app' onClick={() => props.handleChange({ IsHidden: null })}>
                Item Creator
            </button>
            <button className='app' onClick={() => props.handleChange({ IsHidden: null })}>
                Race Creator
            </button>
            <button className='app' onClick={() => props.handleChange({ IsHidden: null })}>
                Class Creator
            </button>
        </div>
    )
}
export default NavBar