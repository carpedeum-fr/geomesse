import request from 'superagent';
import { baseApiUrl } from 'geomesse/environment';

function getPlaces(): Promise<*> {
  return request
  .get(`${baseApiUrl}/api/place/1074`)
  .then(response => (response.body))
  .catch((error) => { console.log('error', error); });
}

export default getPlaces;
