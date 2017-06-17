import React, { PropTypes } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import $ from 'expose-loader?$!jquery';
import Simditor from 'simditor';
import ReactDOM from 'react-dom';
import {emojiUrl} from '../helper/ConstantsHelper';

class AddParentComment extends React.Component {
    constructor(props) {
        super(props);
        this.editor = null;
    }
    componentDidMount() {
        const textbox = ReactDOM.findDOMNode(this.refs.AddParentCommentBox);
        this.editor = new Simditor({
            textarea: $(textbox),
            toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'color', 'ol', 'ul', 'link', 'alignment', 'emoji'],
            emoji: {
                imagePath: emojiUrl
            }
        });
    }
    render() {
        const {actions, articalId} = this.props;
        return (<form>
                    <FormGroup controlId="AddParentCommentBox">
                        <FormControl componentClass="textarea" placeholder="留言" ref={'AddParentCommentBox'} />
                        <Button type="submit" onClick={(e) => {
                            e.preventDefault();
                            if(!!this.editor && this.editor.getValue() !== '') {
                                actions.AddParentComment(this.editor.getValue(), articalId);
                                this.editor.setValue('');
                            }
                        }}>提交</Button>
                    </FormGroup>
                </form>);
    }
}

AddParentComment.propTypes = {
    actions: PropTypes.object,
    articalId: PropTypes.string
};

export default AddParentComment;
