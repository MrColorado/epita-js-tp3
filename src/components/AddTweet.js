import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid'

import { addTweet } from '../actions/tweet';
import store from '../store/index';

function mapDispatchToProps(dispatch) {
    return {
        addTweet: (tweet) => dispatch(addTweet(tweet))
    }
}

class AddTweet extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const id = uuidv1();
        const author_name = document.getElementById('author_name').value;
        const text = document.getElementById('content').value;
        store.dispatch(addTweet({id, author_name, text}));
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author_name"
                    />
                    <label htmlFor="content">Content</label>
                    <input
                        type="text"
                        className="form-control"
                        id="text"
                    />
                </div>
                <button type="submit" className="btn">
                    ADD
                </button>
            </form>
        )
    }
}

const AddTweetComponent = connect(null, mapDispatchToProps)(AddTweet);

export default AddTweetComponent
