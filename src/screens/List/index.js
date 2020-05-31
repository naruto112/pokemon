import React, {useState, Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from './styles';
import api from '../../service/api';

export default class List extends Component {

  state = {
    loading: false,
    pokemon: [],
    page: 20  
  }

  componentDidMount() {

    this.loadingPokemon();

  }


  loadingPokemon = async () => {

    if (this.state.loading) return;

    const poke = [];

    this.setState({ loading: true });

    const { data } = await api.get(`pokemon?offset=20&limit=${this.state.page}`);
  
    data.results.map(async function(item){

      const params = item.url.split("/");
      const { data } = await api.get(`pokemon/${params[6]}/`);
      const ability_id = data.abilities[0].ability.url.split("/");
      const img = data.sprites.front_default
      const index = data.game_indices[0].game_index;

      const obj = {
        id: index, 
        name: item.name,
        image: img, 
        abilitie: ability_id[6]
      }

      poke.push({...obj});

    })

    this.setState({...this.state.pokemon,  pokemon: poke});
    this.setState({ loading: false });

  }


  navigateToDetail = (pokemon) => {
    this.props.navigation.navigate('Detail', { pokemon })
  }

  loadPokemon = () => {

    const page = this.state.page;
    const rest_page = parseInt(page) * 2
    this.setState({page: rest_page});
    this.loadingPokemon();

  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.pokemon}
          keyExtractor={(pokemon => String(pokemon.id))}
          showsVerticalScrollIndicator={false}
          onEndReached={this.loadPokemon}
          onEndReachedThreshold={0.2}
          renderItem={({ item: pokemon }) =>(
            <View style={styles.list}>
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
