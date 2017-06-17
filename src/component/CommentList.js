import React, { PropTypes } from 'react';
import { Button, ListGroup, ListGroupItem, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Simditor from 'simditor';
import ReactDOM from 'react-dom';
import {emojiUrl} from '../helper/ConstantsHelper';

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.editor = null;
    }
    componentDidUpdate() {
        if(!!this.refs.commentReplyBox) {
            const textbox = ReactDOM.findDOMNode(this.refs.commentReplyBox);
            this.editor = new Simditor({
                textarea: textbox,
                toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'color', 'ol', 'ul', 'link', 'alignment', 'emoji'],
                emoji: {
                    imagePath: emojiUrl
                }
            });
        }
    }
    render() {
        const {comments, packageIndex, replyBoxIndex, actions} = this.props;
        let list = comments.map((comment, index) =>{
            return (
                <ListGroupItem className="commentOutline">
                    <div className="commentContent" dangerouslySetInnerHTML={{__html: comment.text}}></div>
                    <Form horizontal>
                        <FormGroup>
                            <ControlLabel>{comment.created_at}</ControlLabel>
                            <Button bsStyle="link" eventKey={3} href="#" onClick={(e) => {
                                e.preventDefault();
                                actions.AddReplyBox(packageIndex, index);
                            }}>{'回复 ' + (index === 0 ? comment.replyCount : '')}</Button>
                            <Button bsStyle="link" eventKey={2} href="#" onClick={(e) => {
                                e.preventDefault();
                                actions.PraiseComment(packageIndex, index, comments[index].id);
                            }} >{'赞 ' + comment.praiseCount}</Button>
                        </FormGroup>
                    </Form>
                </ListGroupItem>
            );
        });

        if(replyBoxIndex >= 0) {
            list.splice(replyBoxIndex + 1, 0,
                <ListGroupItem id="commentReplyOutline">
                    <FormGroup controlId="commentReplyBox">
                        <FormControl componentClass="textarea" placeholder="回复" ref={'commentReplyBox'} />
                        <Button className="commentReplyBoxReplyButton" type="submit" onClick={(e) => {
                            e.preventDefault();
                            if(!!this.editor && this.editor.getValue() !== '') {
                                actions.AddChildComment(packageIndex, comments[0].id, this.editor.getValue());
                                actions.AddReplyBox(-1, -1);
                            }
                        }}>回复</Button>
                    </FormGroup>
                </ListGroupItem>
            );
        }

        return <ListGroup className="commentList">{list}</ListGroup>;
    }
}

CommentList.propTypes = {
    comments: PropTypes.array,
    packageIndex: PropTypes.number,
    replyBoxIndex: PropTypes.number,
    actions: PropTypes.object
};

export default CommentList;
