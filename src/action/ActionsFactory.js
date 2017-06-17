import types from './Types';

const actionFactory = {
    AddParentComment: (text, blogId) => ({
        type: types.AddParentComment,
        text: text
    }),
    AddReplyBox: (packageIndex, commentIndex) => ({
        type: types.AddReplyBox,
        packageIndex: packageIndex,
        commentIndex: commentIndex
    }),
    PraiseComment: (packageIndex, commentIndex, id) => ({
        type: types.PraiseComment,
        packageIndex: packageIndex,
        commentIndex: commentIndex,
        id: id
    }),
    AddChildComment: (packageIndex, id, text) => ({
        type: types.AddChildComment,
        packageIndex: packageIndex,
        text: text,
        id: id
    }),
};

export default actionFactory;
