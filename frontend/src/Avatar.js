import React, {Component} from 'react';

const Avatar = (props) => {
    return (
        <div>
            <img 
            {...props}
            alt="Default"
            />
        </div>
    );
}

export default Avatar;