import React, { Component } from 'react';
import Categories from './Categories';
import Banner from './Banner';
import PostForm from './PostForm';
import Feed from './Feed';
import Aboutpage from './Aboutpage';
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
                    <div class='postBox'>
                        <PostForm changePage={this.props.changePage.bind(this)}/>
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
                        <Aboutpage />
                        {/** TODO: Add content for about pages */}
                    </div>
                )
            case 'policy':
                return (
                    <div>
                        <Policy/>
                    </div>
                )
            case 'jobs':
                return (
                    <div>
                        <Feed category={'test/jobs'} changePage={this.props.changePage.bind(this)}/>
                    </div>
                )
            case 'clearance':
                return (
                    <div>
                        <Feed category={'test/clearance'} changePage={this.props.changePage.bind(this)}/>
                    </div>
                )
            case 'housing':
                return (
                    <div>
                        <Feed category={'test/housing'} changePage={this.props.changePage.bind(this)}/>
                    </div>
                )
            case 'furniture':
                return (
                    <div>
                        <Feed category={'test/furniture'} changePage={this.props.changePage.bind(this)}/>
                    </div>
                )
            case 'academics':
                return (
                    <div>
                        <Feed category={'test/academics'} changePage={this.props.changePage.bind(this)}/>
                    </div>
                )
            case 'community':
                return (
                    <div>
                        <Feed category={'test/community'} changePage={this.props.changePage.bind(this)}/>
                    </div>
                )
            case 'termsOfUse':
                    return (
                        <div>
                            <TermsOfUse/>
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
