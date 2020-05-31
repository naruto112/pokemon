import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import api from '../../service/api';
import styles from './styles';

export default class Detail extends Component {
  constructor(props) {
    const { pokemon } = props.navigation.state.params;
    super(props);
    this.state = {
      pokemonDetail: pokemon,
      detail: null
    };
  }

  async componentDidMount() {

    const id = this.state.pokemonDetail.id;

    const { data } = await api.get(`ability/${id}/`);
    this.setState({detail: data.effect_entries[0].effect});

  }

  handleNoUtil = () => {
    Alert.alert("HMM QUE PENA", "Procure na lista outro Pokemon !");
    this.props.navigation.navigate('List');
  }

  handleUtil = () => {
    Alert.alert("OBA", "Agora no Pokemon GO e Boa sorte !");
  }

  render() {
    return (
      <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('List')}>
                    <Icon name="navigate-before" size={35} color="#1b95e0" />
                </TouchableOpacity>
            </View>
            <View style={styles.detail}>
                <Image 
                  source={{uri: this.state.pokemonDetail.image }} 
                  style={{ width: 100, height: 100, alignSelf: 'center' }}
                />
                <Text style={[styles.detailProperty, { marginTop: 0 }]}></Text>
                <View style={styles.detailDescription}>
                    <Text>{this.state.detail}</Text>
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() => this.handleUtil()}>
                        <Text style={styles.actionText}>Util</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={() => this.handleNoUtil()}>
                        <Text style={styles.actionText}>Não Util</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
  }
}
