import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/ReducerFactory';
import thunk from 'redux-thunk';

const config = {
    configureStore: function(initialState) {
        return createStore(
            rootReducer,
            initialState,
            applyMiddleware(thunk),
        );
    },
    emojiUrl: 'https://mschuan.github.io/Blog_Comment/dist_prod/resource/image/emoji/',
    routerBasePath: '/Blog_Comment/dist_prod/index.html/',
};

export default config;