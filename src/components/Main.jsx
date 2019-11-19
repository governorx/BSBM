import React, { Component } from 'react';
import Categories from './Categories';
import Banner from './Banner';
import Policy from './Policy';
import TermsOfUse from './TermsOfUse';
import '../App.css';
export default class Main extends Component {

    render() {
        /** props is a store of all of he variables and 
        functions passed from the parent component */
        switch (this.props.page) {
            case 'home':
                return (
                    <div>
                        <Banner />
                        {/** Categories will need to be able to change what page we 
                          see so it is also passed the function changePage */}
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
                        <Policy/>
                        {/** TODO: Add content for policy */}
                    </div>
                )

            case 'termsOfUse':
                    return (
                        <div>
                            <TermsOfUse/>
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
