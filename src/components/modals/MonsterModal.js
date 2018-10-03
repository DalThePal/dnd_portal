import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../duck';

class MonsterModal extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {
        this.props.getMonster(this.props.url);
    }

    render() {
        if (this.props.monster.actions) {

            var actions = this.props.monster.actions.map((action, index) => {
                return (
                    <div className='ActAb' key={index}>
                        <h3>{action.name}.</h3>
                        <p>{action.desc}</p>
                    </div>
                )
            })
        }
    
        if (this.props.monster.legendary_actions) {
    
            var legendaryActions = this.props.monster.legendary_actions.map((action, index) => {
                return (
                    <div className='ActAb' key={index}>
                        <h3>{action.name}.</h3>
                        <p>{action.desc}</p>
                    </div>
                )
            })
        }
    
        if (this.props.monster.special_abilities) {
    
            var specialAbilities = this.props.monster.special_abilities.map((ability, index) => {
                return (
                    <div className='ActAb' key={index}>
                        <h3>{ability.name}</h3>
                        <p>{ability.desc}</p>
                    </div>
                )
            })
        }
        return (
            <div className="MonsterModal">
                <div className="modal">
                    <div className="modal-header">
                        <div className="title">{this.props.monster.name}</div>
                        <div className="exit-btn" onClick={() => this.props.handleParentChange()}>
                            <img src={require('../../icons/delete-50-BLACK.png')} alt="X"/>
                        </div>
                    </div>
                    <div className="modal-content">
                        <h2>{this.props.monster.size} {this.props.monster.type}, {this.props.monster.alignment}</h2>
                        <p>Armor class: {this.props.monster.armor_class}</p>
                        <p>Hit Points: {this.props.monster.hit_points} ({this.props.monster.hit_dice})</p>
                        <p>Speed: {this.props.monster.speed} </p>
                        <div className='Stats'>
                            <p>STR {this.props.monster.strength}</p>
                            <p>DEX {this.props.monster.dexterity}</p>
                            <p>CON {this.props.monster.constitution}</p>
                            <p>INT {this.props.monster.intelligence}</p>
                            <p>WIS {this.props.monster.wisdom}</p>
                            <p>CHA {this.props.monster.charisma}</p>
                        </div>
                        <p>Saving Throws:
                            {this.props.monster.strength_save ? `str +${this.props.monster.strength_save}` : ''}
                            {this.props.monster.dexterity_save ? `dex +${this.props.monster.dexterity_save}` : ''}
                            {this.props.monster.constitution_save ? `con +${this.props.monster.constitution_save}` : ''}
                            {this.props.monster.intelligence_save ? `int +${this.props.monster.intelligence_save}` : ''}
                            {this.props.monster.widsom_save ? `wis +${this.props.monster.widsom_save}` : ''}
                            {this.props.monster.charisma_save ? `cha +${this.props.monster.charisma_save}` : ''}
                        </p>
                        <p>senses: {this.props.monster.senses}</p>
                        <p>languages: {this.props.monster.languages}</p>
                        <p>challenge: {this.props.monster.challenge_rating}</p>
                        <div>{specialAbilities}</div>
                        <div>{actions}</div>
                        <div>{legendaryActions}</div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        monster: state.monster
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMonster: (url) => dispatch(actions.getMonster(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonsterModal);