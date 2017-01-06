import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withNavigation } from '@exponent/ex-navigation';
import { Page } from 'geomesse/src/components';

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
});

type PropsType = {
  navigator: any,
};

@withNavigation
class Infos extends Component {
  static route = {
    navigationBar: {
      title: 'Infos',
    },
  };
  props: PropsType;

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            This is the Infos Page
          </Text>
          <Text>
            {this.props.places}
          </Text>
        </View>
      </Page>
    );
  }
 }

export default Infos;
