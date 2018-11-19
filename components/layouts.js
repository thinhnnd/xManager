import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import '../static/css/style.scss';
import HeaderBar from './Header/HeaderBar';
import SideBar from './SideBar';

const rights = ['dash-board', 'notification', 'user-profile', 'student-list', 'time-table']


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeContent: 'notification',
      userAuthorities: ['login'],
      role: 'user',
      name: 'guest'
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
        <HeaderBar role={ role}>
        </HeaderBar>
        { role.indexOf('guest') === 0 ? null:<SideBar rights={rights} />
}
        {this.props.children}
      </div>

    );
  }
}

export default Layout;