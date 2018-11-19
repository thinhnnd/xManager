import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

class HeaderBar extends React.Component {
    render() {
        const { role, name } = this.props;
        return (
            <div className="child header justify-space-between">
                <div className="left-bar">
                    <div className="my-logo">
                        <span><span className="x-logo">X</span>Manager</span>
                    </div>
                    {
                        role.indexOf('guest') === 0 ? null :
                            <div id="btn-nav" className="btn btn-nav" onClick={this.controlLeftSlide}>
                                <i className="fas fa-bars"></i>
                                <i className="fas fa-bars"></i>
                            </div>
                    }

                </div>
                <div className="status-bar">
                    <ul className="nav-top">
                        {role.indexOf('guest') === 0 ? <span>
                        <Link href='/verification/login'>
                            <a>Login</a>
                        </Link> 
                        <Link href='/verification/sign-up'>
                            <a>SignUp</a>
                        </Link> 
                        </span>: name
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default HeaderBar;