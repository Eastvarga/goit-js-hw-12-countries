import 'lodash';

import fetchCountries from './fetchCountries';
import updateCountriesMarkup from './updateCountriesMarkup';

const searchInput = document.querySelector('.search-country');

const debouncedCallback = _.debounce(event => {
  // console.log(event.target.value);

  fetchCountries(event.target.value)
    .then(data => {
      // console.log(data.length);
      updateCountriesMarkup(data);
    })
    .catch(() => {
      // resultRef.innerHTML = '';
      // notice(noticeOptions);
    });
}, 500);

searchInput.addEventListener('input', debouncedCallback);
