import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {IntlProvider} from 'react-intl';
import Spanish from './i18n/es.json'
import English from './i18n/en.json'

const local = navigator.language;
console.log("Esto trae local:  ",local);
let lang;
if(local === "en"){
    lang = English;
}else{
    lang = Spanish;
}
console.log("Esto trae lang:  ",lang);

ReactDOM.render(<IntlProvider locale={local} messages={lang}><App /></IntlProvider>, document.getElementById('root'));
