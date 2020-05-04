import React from 'react';
import Header from './Header';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'nav' : [
                {'label': 'Home', 'value': '/home'},
                {'label': 'About', 'value': '/about'},
                {'label': 'Users', 'value': '/users'},
                {'label': 'Contact Us', 'value': '/contact-us'}
            ]
        }
    }
    render(){
        return (
            <Header tabvalue={this.state.nav}></Header>
        )
    }
}
export default HomeComponent;