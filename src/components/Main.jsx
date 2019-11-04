import React, { Component } from 'react';
import Categories from './Categories';
import Banner from './Banner';
import '../App.css';
export default class Main extends Component {

    render() {
        console.log(this.props.page);
        switch (this.props.page) {
            case 'home':
                return (
                    <div>
                        <Banner />
                        <Categories changePage={this.props.changePage.bind(this)} />
                    </div>
                )
            case 'results':
                return (
                    <div>
                        {/** TODO: Add content for results pages */}
                    </div>
                )
            case 'post':
                return (
                    <div>
                        {/** TODO: Add content for post pages */}
                    </div>
                )
            case 'account':
                return (
                    <div>
                        {/** TODO: Add content for account pages */}
                    </div>
                )
            case 'contact':
                return (
                    <div>
                        {/** TODO: Add content for contact pages */}
                    </div>
                )
            case 'about':
                return (
                    <div>
                        {/** TODO: Add content for about pages */}
                    </div>
                )
            case 'policy':
                return (
                    <div>
                        {/** TODO: Add content for policy */}
                    </div>
                )

            default:
                return (
                    <div>
                        {/** TODO: Add content for a 404 page */}
                    </div>
                )

        }

    }
}
