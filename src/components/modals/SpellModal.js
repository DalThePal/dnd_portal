import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../duck';

class SpellModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorited: props.favorited
        };
    }

    componentDidMount() {
        this.props.getSpell(this.props.url);
    }

    render() {
        const { spell } = this.props;
        return (
            <div className="SpellModal">
                <div className="modal">
                    <div className="modal-header">
                        <div className="title">{spell.name}</div>
                        <img src={require('../../icons/delete-50-BLACK.png')} alt="X" width='5%'
                            onClick={() => this.props.handleParentChange({ selected: false })} />
                    </div>
                    <div className="modal-content">
                        <p>casting time: {spell.casting_time}</p>
                        <p>range: {spell.range}</p>
                        <p>components: {spell.components} {spell.material ? `(${spell.material})` : ''}</p>
                        <p>duration: {spell.duration}</p>
                        <p>{spell.desc}</p>
                        <p>{spell.higher_level ? `at higher levels: ${spell.higher_level}` : ''}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        spell: state.spell
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSpell: (url) => dispatch(actions.getSpell(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpellModal);