import React, { Component } from 'react';
import ItemModal from '../../modals/ItemModal';


class Item extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selected: false,
        };
    }

    handleChange() {
        this.setState({selected: !this.state.selected});
    }

    render() {
        return (
            <div className='Item'>
                <button className='itemHeader' onClick={() => this.handleChange()}>{this.props.item.name}</button>
                {this.state.selected && <ItemModal url={this.props.item.url} handleParentChange={this.handleChange}/>}
            </div>
        );
    }
}

export default Item;