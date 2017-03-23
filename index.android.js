'use strict';
 import React from 'react';
 import {
   AppRegistry
 } from 'react-native';
 var { NativeModules } = require('react-native');
 import TabBar from './react-native/ROOMainPage/Component/TabNavigator.js';
 class HelloWorld extends React.Component {
   render() {
     return (
         <TabBar />
     )
   }
 }
 AppRegistry.registerComponent('HelloWorld', () => HelloWorld);