import React from 'react';
import Link from 'next/link';
import HeaderBar from './Header/HeaderBar'
import Head from 'next/head'
import '../static/css/style.scss';


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeContent: 'notification',
      userAuthorities: ['login'],
      role: 'guest',
    }
  }

  render() {
    // let { activeContent} = this.props;
    let { userAuthorities, role } = this.state;
    return (
      <div className="app-main">
        <Head>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" />
        </Head>
        {this.props.children}
      </div>

    );
  }
}

export default Layout;