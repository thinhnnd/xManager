import React from 'react'
import Link from 'next/link'

import Layout from '../../components/layouts';
import HeaderBar from '../../components/Header/HeaderBar';
import SideBar from '../../components/SideBar';
const rights = ['dash-board', 'notification', 'user-profile', 'student-list', 'time-table']

// import Avatar from '../../static/img/default-avatar.gif';
const UserProfile = () => (
  <div className="container">
    <Layout>
      <HeaderBar role={'user'} >
        <Link href='/verification/login'>
          <a>Login</a>
        </Link>
      </HeaderBar>
      <SideBar rights={rights} />
      <div className="content">
        <div className="card-wrpr mt-15">
          <div className="card-wrpr-header">
            <h3 class="title">Thông tin chi tiết</h3>

          </div>
          <div className="card-wrpr-body">

            <div className="user-profile">
              <div className="up-left">
                <div className="avatar">
                  <img src='../../static/img/default-avatar.gif' alt="avatar" />
                  <div className="usr-pro-name">Trần Anh Thư</div>
                </div>

              </div>
              <div className="up-right">
                <div className="contact-info">
                  <table>
                    <tbody>

                      <tr>
                        <th>Thông tin chung</th>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td className="pl-40">thuta@student.com.vn</td>
                      </tr>
                      <tr>
                        <td>SĐT</td>
                        <td className="pl-40">03390912345</td>
                      </tr>
                      <tr>
                        <td>Skype</td>
                        <td className="pl-40">thuta2012</td>
                      </tr>
                      <tr>
                        <td>Ngày sinh</td>
                        <td className="pl-40">31/10/1998</td>
                      </tr>
                      <tr>
                        <th>Thông tin chung</th>
                      </tr>
                      <tr>
                        <td>Đ/C thường trú</td>
                        <td className="pl-40">BMT Đăk Lăk</td>
                      </tr>
                      <tr>
                        <td>Đ/C tạm trú</td>
                        <td className="pl-40">KP6, P.Linh Trung, Q.Thủ Đức,TP HCM</td>
                      </tr>
                      <tr>
                        <td>Khoa</td>
                        <td className="pl-40">Mạng máy tính & Truyền thông</td>
                      </tr>
                      <tr>
                        <td>Lớp</td>
                        <td className="pl-40">ANTT2016</td>
                      </tr>
                    </tbody>

                  </table>
                </div>
                <button className="b-btn b-btn-blue">Change Profile</button>

              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  </div>


)

export default UserProfile
