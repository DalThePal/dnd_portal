import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Account from './components/Account';
import Apps from './components/apps/Apps';
import EventCalendar from './components/EventCalendar';
import Dashboard from './components/Dashboard';
import Friends from './components/Friends';
import Inbox from './components/Inbox';

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/account' component={Account} />
            <Route path='/calendar' component={EventCalendar} />
            <Route path='/apps' component={Apps} />
            <Route path='/inbox' component={Inbox} />
            <Route path='/friends' component={Friends} />
        </Switch>
    )
}