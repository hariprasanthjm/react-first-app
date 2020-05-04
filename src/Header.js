import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.tabvalue);
    }
    render(){
        return (
            <header className="react-header">
                <nav>
                    {
                        this.props.tabvalue.map((data, i) => {
                        return <li key={i}> <a href={data.value}>{data.label}</a></li>
                        })
                    }
                </nav>
            </header>
        )
    }
}
export default Header;