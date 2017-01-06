import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withNavigation } from '@exponent/ex-navigation';
import { Page } from 'geomesse/src/components';
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
});

type PropsType = {
  navigator: any,
  places: Object,
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
            {this.props.places.toString()}
          </Text>
        </View>
      </Page>
    );
  }
 }

export default Infos;
