import { initialState } from './helper/ConstantsHelper';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import configureStore from './root/configureStore';
import Root from './root/Root';
import './style/main.scss';
import '../node_modules/simditor/styles/simditor.scss';
import '../node_modules/simditor-emoji/styles/simditor-emoji.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
require('./resource/js/emoji');

const store = configureStore(initialState);

render(
    <AppContainer>
        <Root store={store} />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./root/Root', () => {
        const NewRoot = require('./root/Root').default;
        render(
            <AppContainer>
                <NewRoot store={store} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}

