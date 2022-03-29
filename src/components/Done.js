import React, { Component } from 'react';

class Done extends Component {
    render() {
        return (
            <div className='done'>
                <h2 className='doneTitile'>Done</h2>
                {this.props.children}
            </div>
        );
    }
}

export default Done;