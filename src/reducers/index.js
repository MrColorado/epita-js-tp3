import actions from '../utils/enum'

function rootReducer(state = { tweets: [] }, action) {
    switch (action.type) {
        case actions.ADD:
            return Object.assign({}, state, {
                tweets: [...state.tweets, action.data]
            });
        case actions.REMOVE:
            return Object.assign({}, state, {
                tweets: state.tweets.filter(tweet => tweet.id !== action.data.id)
            });
        case actions.EDIT:
            const updatedTweet = [];
            for (const i in state.tweets) {
                if (state.tweets[i].id === action.data.id) {
                    updatedTweet.push(action.data);
                }
                else {
                    updatedTweet.push(state.tweets[i]);
                }
            }
            return Object.assign({}, state, { tweets: updatedTweet });
    }
    return state
}

export default rootReducer;
