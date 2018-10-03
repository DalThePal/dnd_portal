import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../duck';
import Spell from './Spell';

class SpellBook extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    componentDidMount() {
        this.props.getSpells();
    }

    handleChange(obj) {
        this.setState(obj);
    }

    render() {

        const filteredSpells = this.props.spells.filter(spell => {
            return spell.name.toUpperCase().includes(this.state.search.toUpperCase())
        });

        const spells = filteredSpells.map((spell, index) => {
            return (
                <Spell
                    key={index}
                    spell={spell}
                    favorited={true}
                />
            )
        })

        return (
            <div className='SpellBook'>
                <div className='content'>
                    <div className='header'>
                        <div>Spell Book</div>
                        <input className='searchBar' onChange={e => this.handleChange({ search: e.target.value })}/>
                    </div>
                    <div className='spells'>
                        {spells}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        spells: state.spells,
        favorites: state.favorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSpells: () => dispatch(actions.getSpells())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpellBook);