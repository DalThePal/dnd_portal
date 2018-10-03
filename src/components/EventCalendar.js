import React, { Component } from 'react';
import moment from 'moment';

class EventCalendar extends Component {
    constructor() {
        super();
        this.state = {
            momentContex: moment(),
            today: moment(),
            showMonthPopup: false,
            showYearPopup: false,
        };
    }

    weedays = moment.weekdays();
    weekdaysShort = moment.weekdaysShort();
    months = moment.month();

    year = () => this.state.dateContext.format("Y");
    month = () => this.state.dateContext.format("MMMM");
    daysInMonth = () => this.state.dateContext.daysInMonth();
    currentDate = () => this.state.dateContext.get("date");
    currentDay = () => this.state.dateContext.format("D");

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d');
        return firstDay;
    }

    render() {
        return (
            <div className='EventCalendar'>
                <div className='content'>
                    <table className='calendar'>

                    </table>
                </div>
            </div>
        );
    }
}

export default EventCalendar;