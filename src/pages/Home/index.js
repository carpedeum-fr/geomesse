import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { withNavigation } from '@exponent/ex-navigation';

import Router from 'geomesse/src/Router.js';
import { Page, Button } from 'geomesse/src/components';
import api from '../../utils/api.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  searchInput: {
      height: 50,
      padding: 4,
      marginRight: 5,
      fontSize: 23,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 8,
      color: 'white'
  },
  buttonText: {
       fontSize: 18,
       color: '#111',
       alignSelf: 'center'
   },
  button: {
       height: 45,
       flexDirection: 'row',
       backgroundColor: 'white',
       borderColor: 'white',
       borderWidth: 1,
       borderRadius: 8,
       marginBottom: 10,
       marginTop: 10,
       alignSelf: 'stretch',
       justifyContent: 'center'
   },
});

type PropsType = {
  navigator: any,
};

@withNavigation
class Home extends Component {
  static route = {
    navigationBar: {
      title: 'GéoMesse',
    },
  }

  _goToInfos = () => {
    this.props.navigator.push(Router.getRoute('infos'));
  }

  props: PropsType;

  constructor(props){
    super(props);
    this.state = {
        username: '',
        isLoading: false,
        error: false
    }
  }

  handleChange(event){
      this.setState({
          username: event.nativeEvent.text
      })
  }

  handleSubmit(){
    this.setState({
      isLoading: true
    });
    api.getBio(this.state.username).then((res) => {
      if(res.message === 'Not Found'){
        this.setState({
          error: 'User not found',
          isLoading: false
        })
      } else {
        this.props.navigator.push(Router.getRoute('infos'));
        this.setState({
          isLoading: false,
          error: false,
          username: ''
        })
      }
    })
  }

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Text style={styles.welcome}>Chercher une messe</Text>
          <TextInput
              style={styles.searchInput}
              value={this.state.username}
              onChange={this.handleChange.bind(this)} />
          <TouchableHighlight
              style={styles.button}
              onPress={this.handleSubmit.bind(this)}
              underlayColor="white">
              <Text style={styles.buttonText}> Chercher </Text>
          </TouchableHighlight>
          <Text style={styles.instructions}>
            This is page the home
          </Text>
          <Button onPress={this._goToInfos}>Go to the Info page</Button>
        </View>
      </Page>
    );
  }
}


export default Home;
