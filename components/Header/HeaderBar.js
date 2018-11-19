import React from 'react';
import Link from 'next/link';

class HeaderBar extends React.Component {
    render() {
        return (
            <div className="child header justify-space-between">
                <div className="left-bar">
                    <div className="my-logo">
                        <span><span className="x-logo">X</span>Manager</span>
                    </div>
                    <div id="btn-nav" className="btn btn-nav" onClick={this.controlLeftSlide}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
                <div className="status-bar">
                    <ul className="nav-top">
                        {this.props.children}
                    </ul>
                </div>
            </div>
        )
    }
}

export default HeaderBar;