import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AddParentComment from '../component/AddParentComment';
import CommentList from '../component/CommentList';
import actionsFactory from '../action/ActionsFactory';
import { bindActionCreators } from 'redux';

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);

        // 0 means this comment container is not related to any article
        this.articalId = props.articalId || 0;
    }
    componentDidMount() {
        // TODO: send request to fetch comments content
    }
    render() {
        const { state, actions } = this.props;
        let commentPackageList = state.packages.map((p, index) => {
            return (<div className="commentPackageBox" >
                        <CommentList
                            comments={p}
                            packageIndex={index}
                            replyBoxIndex={(index === state.replyBoxIndex.packageIndex) ? state.replyBoxIndex.commentIndex : -1}
                            actions={actions}
                        />
                    </div>);
        });

        return (<div>
                    <AddParentComment actions={actions} articalId={this.articalId} />
                    {commentPackageList}
                </div>);
    }
}

CommentContainer.propTypes = {
    state: PropTypes.object,
    actions: PropTypes.object,
    articalId: PropTypes.string
};

const buildActionDispatcher = (dispatch) => ({
    actions: bindActionCreators(actionsFactory, dispatch)
});

export default connect(
(state) => {
    return ({ state: state.CommentState });
}, buildActionDispatcher)(CommentContainer);
