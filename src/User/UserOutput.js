import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    
    return(   
        <div className="UserOutput">
            <p>Hello I am {props.userName} !!</p>
            <p>Nice to meet you {props.children}</p>
        </div>
    )
}

export default UserOutput;