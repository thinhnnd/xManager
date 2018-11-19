import React from 'react'
import Link from 'next/link'

import Layout from '../components/layouts';
import HeaderBar from '../components/Header/HeaderBar';

const UserProfile = () => (
  <div className="container">
    <Layout>
      <HeaderBar >
        <Link href='/verification/login'>
          <a>Login</a>
        </Link>
      </HeaderBar>
      <div className="show-case">
        <h1>Phần mềm quản lý XManager</h1>
      </div>
    </Layout>
  </div>
)

export default UserProfile
