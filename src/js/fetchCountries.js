function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/`;
  const filter = `?fields=name;capital;population;languages;flag`;

  return fetch(url + searchQuery + filter)
    .then(response => {
      // console.log(response);
      return response.json();
    })
    .catch();
}
export default fetchCountries;
