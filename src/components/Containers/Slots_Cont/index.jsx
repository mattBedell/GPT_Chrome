import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSlots } from './../../../actions/index.js';

import Slot from './../../Slot/index.jsx';

class Slots extends Component {

    genarateSlots() {
        return this.props.slots.map((slot, i) => {
            return (
                <Slot
                    key={`${slot.name}${i}`}
                    {...slot}
                />
            )
        })
    }
    render() {
        return(
            <div className='slots'>
                {this.genarateSlots()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        slots: state.slots
    };
}
export default connect(mapStateToProps)(Slots);