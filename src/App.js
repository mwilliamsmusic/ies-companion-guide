import React from 'react';
import {Route, Switch} from 'react-router-dom'
import styles from './App.module.css';

import Loading from './UI/Loading/loading';
import CharDisplay from './Pages/Character/charDisplay';
import EquipDisplay from './Pages/Equipment/equipDisplay';
import ItemDisplay from './Pages/Item/itemDisplay';
import BeastDisplay from './Pages/Beastiary/beastDisplay';
import Display from './Display/display';

function App() {
  return (

    <div>

      <Display/>

      <div className={styles.spacer}> </div>
      <Switch>
        <Route exact path="/" component={CharDisplay}/>
        <Route exact path="/item" component={ItemDisplay}/>
        <Route exact path="/equipment" component={EquipDisplay}/>
        <Route exact path="/beastiary" component={BeastDisplay}/>
      </Switch>
    </div>
  );
}

export default App;
