import React, { Component } from 'react';
import MonsterModal from '../../modals/MonsterModal';


class Monster extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selected: false,
            monster: {}
        };
    }

    handleChange() {
        this.setState({selected: !this.state.selected});
    }

    render() {
        return (
            <div className='Monster'>
                <button className='monsterHeader' onClick={() => this.handleChange()}>{this.props.monster.name}</button>
                {this.state.selected && <MonsterModal url={this.props.monster.url} handleParentChange={this.handleChange}/>}
            </div>
        );
    }
}

export default Monster;