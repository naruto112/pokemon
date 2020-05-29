import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';

import styles from './styles';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.incident}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.labelValue}>Bulbasaur</Text>
            <Image 
              source={require('../../assets/bulbasaur.png')} 
              style={{ width: 70, height: 70 }}
            />
          </View>
          <TouchableOpacity 
              style={styles.detailsButton} 
              onPress={() => navigateToDetail(incident)}
          >
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
          </TouchableOpacity>
        </View>                        
      </View>
    );
  }
}
