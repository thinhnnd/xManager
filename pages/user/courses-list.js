import React from 'react';
import Link from 'next/link';
import HeaderBar from '../../components/Header/HeaderBar';
import Layout from '../../components/layouts';
import SideBar from '../../components/SideBar';
import coursesListOfTeacher from '../../static/dataTest/liscourses.json';


const rights = ['dash-board', 'notification', 'user-profile', 'student-list', 'time-table']

class CheckIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date(),
        }
    }
    generateList() {

    }
    render() {
        console.log(coursesListOfTeacher);
        let list = coursesListOfTeacher.map((item, index) =>
            <tr key={index}>
                <td>{item.courseID}</td>
                <td>{item.name}</td>
                <td>{item.time}</td>
                <td>{item.room}</td>
            </tr>
        );
        console.log(list);
        const { today } = this.state;


        return (
            <div className="container">
                <Layout>
                    <div className="content">
                        <div className="card-wrpr mt-15">
                            <div className="card-wrpr-header">
                                <h5 className="title">Các môn học của tôi</h5>
                            </div>
                            <div className="card-wrpr-body">
                                <div>
                                    Hôm nay ngày: {(today.getDate()) + "/ " + (today.getMonth() + 1) + "/ " + (today.getFullYear())}
                                </div>
                                <table className="list-check-in">
                                    <thead>
                                        <tr>
                                            <th>Mã môn học</th>
                                            <th>Tên môn học</th>
                                            <th>Thời gian</th>
                                            <th>Phòng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default CheckIn;