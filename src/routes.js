import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './component/App';
import CommentContainer from './container/CommentContainer';
import config from './root/Configure';

export default class Routes extends React.Component {
    render() {
        return (<BrowserRouter basename={config.routerBasePath}>
                    <App>
                        <Route path="/" exact component={CommentContainer} />
                        <Route path="/comments" component={CommentContainer} />
                    </App>
                </BrowserRouter>);
    }
}
