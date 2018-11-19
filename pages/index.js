import React from 'react'
import Link from 'next/link'

import Layout from '../components/layouts';
import HeaderBar from '../components/Header/HeaderBar';

const Home = () => (
  <div className="container">
    <Layout>
      <div className="show-case">
        <div class="main-intro">
          <div className="img-wrpr">
            <img src="https://smart-school.in/wp-content/themes/smartschool/assets/img/features.png" />
          </div>
        </div>
      </div>

    </Layout>
  </div>
)

export default Home
