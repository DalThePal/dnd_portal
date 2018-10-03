import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../duck';
import Item from './Item';

class ItemList extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    componentDidMount() {
        this.props.getItems();
    }

    handleChange(obj) {
        this.setState(obj);
    }

    render() {

        const filteredItems = this.props.items.filter(item => {
            return item.name.toUpperCase().includes(this.state.search.toUpperCase())
        });            

        const items = filteredItems.map((item, index) => {
            return (
                <Item
                    key={index}
                    item={item}
                />
            )
        })

        return (
            <div className='ItemList'>
                <div className='content'>
                    <div className='header'>
                        <div>Item List</div>
                        <input placeholder='Search' onChange={e => this.handleChange({search: e.target.value})}/>
                    </div>
                    <div className='items'>
                        {items}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getItems: () => dispatch(actions.getItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);