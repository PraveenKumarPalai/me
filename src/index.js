import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './route/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const routing = (
  <>
    <Routes>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');

      </style>
    </Routes>
  </>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
