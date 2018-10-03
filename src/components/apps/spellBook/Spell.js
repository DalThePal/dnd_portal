import React, { Component } from 'react';
import SpellModal from '../../modals/SpellModal';
import { connect } from 'react-redux';
import { actions } from '../../../duck';

class Spell extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selected: false,
            favorited: props.favorited
        };
    }

    // componentDidMount() {
    //     this.props.favorites.map(item => {
    //         if(item.name === this.props.spell.name) {
    //             this.setState({favorited: true});
    //         }
    //     })
    // }

    handleChange(obj) {
        this.setState(obj);
    }

    toggleFavorited(obj) {
        if(this.state.favorited) {
            this.props.remFromFavorites(this.props.spell.id);
        } else {
            this.props.addToFavorites({
                name: this.props.spell.name,
                url: this.props.spell.url,
                type: 'spell',
                index: null
            })
        }
        this.setState(obj);
    }

    render() {
        return (
            <div className='Spell'>
                <button className='spellHeader' onClick={() => this.handleChange({ selected: !this.state.selected })}>
                    <div>{this.props.spell.name}</div>
                    <img src={this.state.favorited ? require('../../../icons/heart-filled-BLACK-50.png') :
                        require('../../../icons/heart-50.png')} width='5%' alt='heart'
                        onClick={(e) => {e.stopPropagation(); this.toggleFavorited({ favorited: !this.state.favorited })}} />
                </button>
                {this.state.selected && <SpellModal 
                    url={this.props.spell.url} 
                    handleParentChange={this.handleChange}
                    favorited={this.props.favorited}
                />}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favortes: state.favorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToFavorites: (item) => dispatch(actions.addToFavorites(item)),
        remFromFavorites: (item) => dispatch(actions.remFromFavorites(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Spell);