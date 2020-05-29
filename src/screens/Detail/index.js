import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Detail !</Text>
      </View>
    );
  }
}
