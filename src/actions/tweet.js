import action from '../utils/enum'

export function addTweet(data) {
    return {
        type: action.ADD,
        data,
    }
}

export function removeTweet(data) {
    return {
        type: action.REMOVE,
        data,
    }
}

export function editTweet(data) {
    return {
        type: action.EDIT,
        data,
    }
}
