import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class Splash extends Component {
  componentDidMount = () => {
      setTimeout(
          () => { this.props.navigation.navigate('List')},
          2000
      )
  }

  render() {
    return (
      <View>
        <Image style={styles.image} source={require('../assets/pokebola.png')} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
        top: 200,
        resizeMode: 'contain',
        alignSelf: 'center'
    }
})