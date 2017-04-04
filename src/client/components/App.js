import React, { PropTypes } from 'react';
import Card from './Card';
import styles from './App.css';


const App = props => {

  return (
    <div className={styles.container} >
      App
      <Card />
    </div>
  );
};

App.propTypes = {};

export default App;

