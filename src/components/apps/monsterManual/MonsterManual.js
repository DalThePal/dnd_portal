import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../duck';
import Monster from './Monster';

class MonsterManual extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    componentDidMount() {
        this.props.getMonsters();
    }

    handleChange(obj) {
        this.setState(obj);
    }

    render() {

        const filteredMonsters = this.props.monsters.filter(monster => {
            return monster.name.toUpperCase().includes(this.state.search.toUpperCase())
        });

        const monsters = filteredMonsters.map((monster, index) => {
            return (
                <Monster
                    key={index}
                    monster={monster}
                />
            )
        })

        return (
            <div className='MonsterManual'>
                <div className='content'>
                    <div className='header'>
                        <div>Monster Manual</div>
                        <input placeholder='Search' onChange={e => this.handleChange({search: e.target.value})}/>
                    </div>
                    <div className='monsters'>
                        {monsters}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        monsters: state.monsters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMonsters: () => dispatch(actions.getMonsters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonsterManual);