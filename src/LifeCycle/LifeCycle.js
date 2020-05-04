import React, { Component } from 'react';


class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: '$',
            money : 'USD'
        }
        console.log('INSIDE CONSTRUCTOR')
    }

    testDriver = (val) => {
        console.log('CLick event', val);
        this.setState({money: val})
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.setState({currency :'#'});
    }
    componentDidUpdate() {
        console.log('Did Update');
        console.log(this.state);
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount')
      }

    render() {
        console.log('INSIDE RENDER')
        return (
            <div className="LifeCycle">
                <h1 onClick={() => this.testDriver('INR')}>Life Cycle Hooks Test {this.props.currency}</h1>
            </div>
        );
    }

}
export default LifeCycle;