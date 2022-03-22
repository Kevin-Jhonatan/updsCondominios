// Common entry point for both Android and iOS.

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import Home from './components/Home/Home.component';

class CondominiosApp extends Component {
  render() {
    return (
      <Home />
    )
  }
}

export default CondominiosApp;
