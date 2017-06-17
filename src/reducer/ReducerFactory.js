import { combineReducers } from 'redux';
import { initialState } from '../helper/ConstantsHelper';
import types from '../action/Types';

const packages = (state = initialState.CommentState.packages, action) => {
    switch(action.type) {
        case types.AddChildComment:
            if(action.id !== state[action.packageIndex][0].id) {
                return state;
            }
            return ([
                ...state.slice(0, action.packageIndex),
                [Object.assign({},state[action.packageIndex][0],{replyCount: state[action.packageIndex][0].replyCount + 1}),
                    ...state[action.packageIndex].slice(1), {text: action.text, created_at: '', praiseCount: 0, replyCount: 0, id: 0 }],
                ...state.slice(action.packageIndex + 1)
            ]);
        case types.AddParentComment:
            return ([...state, [{text: action.text, created_at: '', praiseCount: 0, replyCount: 0, id: 0}]]);
        case types.PraiseComment:
            return ([
                ...state.slice(0, action.packageIndex),
                [...state[action.packageIndex].slice(0, action.commentIndex),
                    Object.assign({}, state[action.packageIndex][action.commentIndex], {praiseCount: state[action.packageIndex][action.commentIndex].praiseCount + 1}),
                    ...state[action.packageIndex].slice(action.commentIndex + 1)],
                ...state.slice(action.packageIndex + 1)
            ]);
        default:
            return state;
    }
};

const replyBoxIndex = (state = initialState.CommentState.replyBoxIndex, action) => {
    switch(action.type) {
        case types.AddReplyBox:
            if(state.packageIndex === action.packageIndex && state.commentIndex === action.commentIndex) {
                return initialState.CommentState.replyBoxIndex;
            }
            return ({
                packageIndex: action.packageIndex,
                commentIndex: action.commentIndex
            });
        default:
            return state;
    }
};

const CommentState = combineReducers({
    packages,
    replyBoxIndex
});

const rootReducer = combineReducers({
    CommentState
});


export default rootReducer;
