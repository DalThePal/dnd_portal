import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ItemList from './itemList/ItemList';
import MonsterManual from './monsterManual/MonsterManual';
import SpellBook from './spellBook/SpellBook';

export default () => {
    return (
        <Switch>
            <Route exact path='/apps' component={MonsterManual} />
            <Route path='/apps/spellbook' component={SpellBook} />
            <Route path='/apps/itemlist' component={ItemList} />
        </Switch>
    )
}