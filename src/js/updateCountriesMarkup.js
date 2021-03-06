import countryList from '../templates/country-list.hbs';
import countryData from '../templates/country-detalis.hbs';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';

import {
  success,
  error,
  defaultModules,
  Stack,
} from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});

const myStack = new Stack({
  dir1: 'down',
  dir2: 'left',
  firstpos1: 25,
  firstpos2: 30,
  context: document.body,
});

// const noticeOptions = {
//   ...defaults,
//   title: 'Sorry',
//   text: 'Too many matches found. Please enter a more specific query!',
//   module: defaultModules,
//   stack: myStack,
//   delay: 1000,
// };
const successOption = {
  title: 'Found',
  text: 'You are amaizing!',
  delay: 2000,
  stack: myStack,
};

const errorOption = {
  title: 'Sorry',
  text: 'Too many matches found. Please enter a more specific query!',
  module: defaultModules,
  stack: myStack,
  delay: 2000,
};
//

const resultRef = document.querySelector('.result');

function updateCountriesMarkup(countriesData) {
  resultRef.innerHTML = '';
  if (countriesData.length >= 1) {
    if (countriesData.length > 1 && countriesData.length <= 10) {
      const markup = countryList(countriesData);
      resultRef.insertAdjacentHTML('beforeend', markup);
      return;
    }
    if (countriesData.length === 1) {
      const markup = countryData(countriesData);
      resultRef.insertAdjacentHTML('beforeend', markup);
      success(successOption);
      return;
    }
    error(errorOption);
  } else {
    error(errorOption);
  }
}

export default updateCountriesMarkup;
