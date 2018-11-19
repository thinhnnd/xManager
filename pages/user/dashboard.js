import React from 'react'
import Link from 'next/link'

import Layout from '../../components/layouts';
import HeaderBar from '../../components/Header/HeaderBar';
import SideBar from '../../components/SideBar';
const rights = ['dash-board', 'notification', 'user-profile', 'student-list', 'time-table']

// import Avatar from '../../static/img/default-avatar.gif';
const DashBoard = () => (
    <div className="container">
        <Layout>
            <HeaderBar role={'user'} >
                <Link href='/verification/login'>
                    <a>Login</a>
                </Link>
            </HeaderBar>
            <SideBar rights={rights} />
            <div className="content">
                <div className="counter">
                    <div className="brick-info bc-orange">
                        <div className="up"><i class="fas fa-graduation-cap"></i> 60</div>
                        <p className="down">Tổng số học viên</p>
                    </div>
                    <div className="brick-info bc-green" >
                        <div className="up"><i class="fas fa-chalkboard-teacher"></i>14</div>
                        <p className="down">Tổng số giảng viên</p>
                    </div>
                    <div className="brick-info bc-pink">
                        <div className="up">
                            <i class="fas fa-book-open"></i>
                            28
                         </div>

                        <p className="down">Tổng số khóa học đang mở</p>
                    </div>
                    <div className="brick-info bc-violet">
                        <div className="up">
                            <i class="fas fa-running"></i>
                            6
                        </div>

                        <p className="down">Tổng các hoạt động đang mở</p>
                    </div>
                </div>
                <div className="card-wrpr mt-15">
                    <div className="card-wrpr-body">

                    </div>
                </div>
            </div>

        </Layout>
    </div>


)

export default DashBoard
