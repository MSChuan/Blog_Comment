import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './component/App';
import CommentContainer from './container/CommentContainer';

export default class Routes extends React.Component {
    render() {
        return (<BrowserRouter basename={'/Blog_Comment/dist_prod/index.html/'}>
                    <App>
                        <Route path="/" exact component={CommentContainer} />
                        <Route path="/comments" component={CommentContainer} />
                    </App>
                </BrowserRouter>);
    }
}
