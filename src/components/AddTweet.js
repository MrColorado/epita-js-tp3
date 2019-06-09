import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid'

import store from '../store/index';
import { addTweet } from '../actions/tweet';

class AddTweet extends Component {
    constructor(props) {
        super(props);
        AddTweet.handleSubmit = AddTweet.handleSubmit.bind(this)
    }

    static handleSubmit(event) {
        // In order to no reload the page
        event.preventDefault();
        const id = uuidv1();
        const author_name = document.getElementById('author_name').value;
        const text = document.getElementById('text').value;
        store.dispatch(addTweet({id, author_name, text}));
    }

    render() {
        return (
            <form onSubmit={ AddTweet.handleSubmit }>
                <div className="form-group">
                    <label htmlFor="author_name">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author_name"
                    />
                    <label htmlFor="text">Content</label>
                    <input
                        type="text"
                        className="form-control"
                        id="text"
                    />
                <button type="submit" className="btn">
                    ADD
                </button>
                </div>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTweet: (tweet) => dispatch(addTweet(tweet))
    }
}

const AddTweetComponent = connect(mapDispatchToProps)(AddTweet);

export default AddTweetComponent
