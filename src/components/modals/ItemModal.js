import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../duck';

class ItemModal extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {
        this.props.getItem(this.props.url);
    }

    render() {
        const { item } = this.props;
        console.log(this.props.item)
        return (
            <div className="ItemModal">
                <div className="modal">
                    <div className="modal-header">
                        <div className="title">{item.name}</div>
                        <div className="exit-btn" onClick={() => this.props.handleParentChange()}>
                            <img src={require('../../icons/delete-50-BLACK.png')} alt="X" />
                        </div>
                    </div>
                    <div className="modal-content">
                        <h2>{item.equipment_category ? item.equipment_category : ''}</h2>
                        <p>Cost: {item.cost ? item.cost.quantity : ''} {item.cost ? item.cost.unit : ''}</p>
                        <p>Weight: {item.weight} lb.</p>
                        <p>{item.weapon_range ? 'Range: ' + item.weapon_range : ''}</p>
                        <p>{item.damage ? 'Damage: ' + item.damage.dice_count : ''}{item.damage ? 'd' + item.damage.dice_value : ''}</p>
                        <p>{item.desc}</p>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.item
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getItem: (url) => dispatch(actions.getItem(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);