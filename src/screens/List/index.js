import React, {useState, Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from './styles';
import api from '../../service/api';

export default class List extends Component {

  state = {
    pokemon: []
  }

  async componentDidMount() {

    const poke = [];
    const { data } = await api.get('pokemon');
  
    data.results.map(async function(item){

      const params = item.url.split("/");
      
      //Captura a imagem do pokemon e a URL para os detalhes
      const { data } = await api.get(`pokemon/${params[6]}/`);
      
      const ability_id = data.abilities[0].ability.url.split("/");
      
      const img = data.sprites.front_default
      const index = data.game_indices[0].game_index;

      poke.push({id: index, name: item.name, image: img, abilitie: ability_id[6]});

    })

    this.setState({pokemon: poke});

  }


  navigateToDetail = (pokemon) => {
    this.props.navigation.navigate('Detail', { pokemon })
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.pokemon}
          keyExtractor={pokemon => String(pokemon.id)}
          showsVerticalScrollIndicator={false}
          // onEndReached={loadIncidents}
          onEndReachedThreshold={0.2}
          renderItem={({ item: pokemon }) =>(
            <View style={styles.incident}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.labelValue}>{pokemon.name.toUpperCase()}</Text>
                <Image 
                  source={{uri: pokemon.image }} 
                  style={{ width: 100, height: 100 }}
                />
              </View>
              <TouchableOpacity 
                  style={styles.detailsButton} 
                  onPress={() =>this.navigateToDetail(pokemon)}
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
