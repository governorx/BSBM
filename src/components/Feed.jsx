import React, { Component } from 'react';
import { Storage } from 'aws-amplify';
import Postcard from './Postcard'
// Renders a feed of posts based off of an 
// inherented directory which has a set of posts
export default class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            posts: [],
        }
        this.getRecent = this.getRecent.bind(this)
        this.getRecent().then(result => {
            this.setState({
                posts: result,
            })
        })
    }
    // starts loading in posts from least to most recent in our category
    getRecent() {
        let dir = this.props.category + '/'
        return new Promise(function (resolve, reject) {
            Storage.list(dir)
                .then(result => {
                    var postResults = []
                    for (let i = 0; i < result.length; i++) {
                        if (result[i] == null) { break }
                        let path = result[i][Object.keys(result[i])[0]]
                        postResults.push(path)
                    }
                    resolve(postResults)
                })
                .catch(err => console.log(err))
        })
    }
    //renders set of Postcards contining the post from each element
    render() {
        let posts = []
        this.state.posts.forEach(element => {
            posts.push(<Postcard path={element} />)
        });
        return (
            <div>
                {posts}
            </div>
        )

    }
}
