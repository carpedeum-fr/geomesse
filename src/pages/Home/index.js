import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { withNavigation } from '@exponent/ex-navigation';

import Router from 'geomesse/src/Router.js';
import { Page, Button, GeoLocation } from 'geomesse/src/components';
import { getPlaces } from 'geomesse/src/utils/api';

import appStyle from 'geomesse/src/appStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: appStyle.font.fontSize.huge,
    textAlign: 'center',
    margin: appStyle.grid.x1,
  },
  instructions: {
    textAlign: 'center',
    color: appStyle.colors.primary,
    marginBottom: appStyle.grid.x1,
  },
  searchInput: {
    height: appStyle.dimensions.touchableHeight,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'black',
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
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: false,
    };
  }

  props: PropsType;

  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      isLoading: true,
    });
    getPlaces().then((res) => {
      this.props.navigator.push(Router.getRoute('infos', { places: res }));
      this.setState({
        isLoading: false,
        error: false,
      });
    });
  }

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Text style={styles.welcome}>Chercher un lieu</Text>
          <TextInput
            style={styles.searchInput}
            value={this.state.username}
            onChange={event => this.handleChange(event)}
          />
          <Button onPress={event => this.handleSubmit(event)}>Chercher</Button>
          <GeoLocation />
        </View>
      </Page>
    );
  }
}


export default Home;
