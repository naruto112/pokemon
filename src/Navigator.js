import React from 'react';
import {StatusBar, Image} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import List from './screens/List';
import Detail from './screens/Detail';

StatusBar.setBackgroundColor('#03d360');
StatusBar.setBarStyle('light-content');

const Router = createAppContainer(
  createStackNavigator({
      List: {
          screen: List,
          navigationOptions: {
              headerTitle: <Image style={{ width: 350, height: 200, top: 50, alignSelf: "center"}} source={require('./assets/logo.png')}/>,
              headerStyle: {
                  backgroundColor: '#03d360',
              }
          },
      },
      Detail: {
          screen: Detail,
          navigationOptions: {
              title: '',
              headerTintColor: 'white',
              headerStyle: {

                  backgroundColor: '#03d360',
              }
          },
      },
  })
)

export default Router;
