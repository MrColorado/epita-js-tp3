import React from "react";
import {connect} from "react-redux";
import store from "../store/index"
import { removeTweet } from '../actions/tweet'

const TweetList = ({tweets}) => {
    return (
        <ul>
            {tweets.map(tweet =>
                <li key={tweet.id}>
                    <h3>
                        Tweet number : {tweet.id} wrote by {tweet.author_name}
                        <button onClick={() => store.dispatch(removeTweet({id: tweet.id}))}>X</button>
                    </h3>
                    <p>
                        {tweet.text}
                    </p>
                </li>
            )}
        </ul>
    )
};

const mapStateToProps = (state) => {
    return { tweets: state.tweets };
};

const TweetListComponent = connect(mapStateToProps)(TweetList);

export default TweetListComponent;
