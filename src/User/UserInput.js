import React from 'react';

const UserInput = (props) => {
    const styl = {
        border: '2px solid red',
        padding: '5px'
    }
        return(
            <div className="UserInput">
                <input type="text" style={styl} placeholder="User Feedback" onChange={props.change}/>
            </div>
        )
}

export default UserInput;