import React, {useState, Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';

import styles from './styles';

import api from '../../service/api';

export default class List extends Component {

  state = {
    pokemon: []
  }

  async componentDidMount() {

    const { data } = await api.get('pokemon');

    this.setState({ pokemon: [...data.results] });
    

  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.pokemon}
          keyExtractor={()=>{}}
          showsVerticalScrollIndicator={false}
          // onEndReached={loadIncidents}
          onEndReachedThreshold={0.2}
          renderItem={({ item: pokemon }) =>(
            <View style={styles.incident}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.labelValue}>{pokemon.name}</Text>
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
          )}
        />
      </View>
    );
  }
}
