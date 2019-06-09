import React from 'react'
import { hot } from 'react-hot-loader'

import TweetListComponent from './components/TweetsList'
import AddTweetComponent from "./components/AddTweet";

const App = () => (
    <div>
        <h1>
            Welcome to Tweepita
        </h1>
        <h2>
            Add a new tweet
        </h2>
        <AddTweetComponent />
        <h2>
            List of all existing tweets
        </h2>
        <TweetListComponent />
    </div>
);

export default hot(module)(App)
