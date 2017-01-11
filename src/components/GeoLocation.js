import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { getPlacesByLocation } from 'geomesse/src/utils/api';

export default class GeolocationExample extends Component {
  state = {
    initialPosition: 'KO',
    nearPlaces: [],
  };

  componentDidMount() {
    getPlacesByLocation().then((res) => {
      console.log('locations', res);
      this.setState({
        nearPlaces: res._embedded.items,
      });
    });
    // this.watchID = navigator.geolocation.watchPosition((position) => {
    //   var lastPosition = JSON.stringify(position);
    //   this.setState({lastPosition});
    // });
  }
  //
  // componentWillUnmount() {
  //   navigator.geolocation.clearWatch(this.watchID);
  // }

  // watchID: ?number = null;

  render() {
    return (
      <View>
        <Text>
          <Text>Initial position: </Text>
          {this.state.initialPosition}
          {this.state.nearPlaces}
        </Text>
      </View>
    );
  }
}
