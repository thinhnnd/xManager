import React from 'react';
import Link from 'next/link';
import MinifiedHeader from './Header/MinifiedHeader'

class LayoutMinifine extends React.Component {
  render() {
    // let { activeContent} = this.props;
    let { userAuthorities, role } = this.state;
    return (
      <div className="app-main">
        <HeaderBar />
        {this.props.children}
      </div>

    );
  }
}

export default LayoutMinifine;