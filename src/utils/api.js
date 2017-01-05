const api = {
  getBio(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json())
  },
  getPlaces() {
    var url = `http://geomesse.ghirardotti.fr/api/place`;
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;
