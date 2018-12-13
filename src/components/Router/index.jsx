import React from 'react';
import AppConsumer from '../context/AppConsumer';
import Home from '../Home';
import Augustine from '../lighthouses/Augustine';
import Peggys from '../lighthouses/Peggys';

const elements = { Home, Augustine, Peggys };

const Router = ({ route }) => (
  React.createElement(elements[route])
);

export default AppConsumer(Router);
