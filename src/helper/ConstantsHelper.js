const emojiUrl = 'https://github.com/MSChuan/Blog_Comment/dist_prod/resource/image/emoji/'

const initialState = {
    CommentState: {
        packages: [],
        replyBoxIndex: {
            packageIndex: -1,
            commentIndex: -1
        }
    }
};

export {emojiUrl, initialState};