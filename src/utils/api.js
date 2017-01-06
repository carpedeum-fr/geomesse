import request from 'superagent';
// import { baseApiUrl } from 'geomesse/environment';

function getPlaces(): Promise<*> {
  return request
  .get('https://api.github.com/users/JusteLeblanc')
  // .get(`${baseApiUrl}/api/place/1074`)
  .then((response) => {
    console.log(response.body);
    return (response.body);
  })
  .catch((error) => { console.log('error', error); });
}

export default getPlaces;
