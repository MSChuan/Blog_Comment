import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer/ReducerFactory';
import DevTools from '../debugTool/DevTools';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            DevTools.instrument()
        )
    );

    return store;
}
