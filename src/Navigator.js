import React from 'react';
import {StatusBar, Image} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import List from './screens/List';
import Detail from './screens/Detail';
import Splash from './screens/Splash';


const Router = createAppContainer(
  createStackNavigator({
      Splash: {
        screen: Splash,
        navigationOptions: {
          headerShown: false,
        }
      },
      List: {
          screen: List,
          navigationOptions: {
              headerTitle: () => <Image style={{ width: 200, height: 200, top: 20, alignSelf: "center"}} source={require('./assets/logo.png')}/>,
              headerLeft: () => false,
              headerStyle: {
                  backgroundColor: '#03d360',
              }
          },
      },
      Detail: {
          screen: Detail,
          navigationOptions: {
            headerTitle: () => <Image style={{ width: 200, height: 200, top: 20, alignSelf: "center"}} source={require('./assets/logo.png')}/>,
              headerTintColor: 'white',
              headerLeft: () => false,
              headerStyle: {
                  backgroundColor: '#03d360',
              }
          },
      },
  })
)

export default Router;
