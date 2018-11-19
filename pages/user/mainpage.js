import React from 'react';
import Link from 'next/link';
import HeaderBar from '../../components/Header/HeaderBar';
import Layout from '../../components/layouts';
import SideBar from '../../components/SideBar';


const rights = ['dash-board', 'notification', 'user-profile', 'student-list', 'time-table']

class MainPage extends React.Component {
    render() {
        console.log('Hello')

        return (
            <div className="container">
                <Layout>
                    <HeaderBar>
                        thinhdnnd
                    </HeaderBar>
                    <SideBar rights={rights} />
                    <div className="content">
                        {this.props.children}
                    </div>
                </Layout>
            </div>
        );
    }
}

export default MainPage;