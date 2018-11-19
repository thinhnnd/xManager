import React from 'react';
import Link from 'next/link';

class MinifiedHeader extends React.Component {
    render() {
        return (
            <div className="child header justify-space-center">
                <div className="logo-bar">
                    <div className="my-logo">
                        <span><span className="x-logo">X</span>Manager</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default MinifiedHeader;