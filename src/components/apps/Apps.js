import React, { Component } from 'react';
import AppsRoutes from './routes';

class Apps extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className='Apps'>
                <AppsRoutes />
            </div>
        );
    }
}

export default Apps;