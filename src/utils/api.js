import request from 'superagent';
import { baseApiUrl } from 'geomesse/environment';

export function getPlaces(): Promise<*> {
  return request
  .get(`${baseApiUrl}/api/place/1074`)
  .then(response => (response.body))
  .catch((error) => { console.log('error', error); });
}

export async function getPlacesByLocation(): Promise<*> {
  await navigator.geolocation.getCurrentPosition(
    (position) => {
      this.initialPosition = JSON.stringify(position);
    },
    (error) => alert(JSON.stringify(error)),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );
  console.log('initialPosition', this.initialPosition);
  return request
  .get(`${baseApiUrl}/api/place/near/${this.initialPosition.latitude}/${this.initialPosition.longitude}`)
  .then((response) => {
    console.log(response.body);
    return response.body;
  })
  .catch((error) => { console.log('error', error); });
}
