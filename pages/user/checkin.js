import React from 'react';
import Link from 'next/link';
import HeaderBar from '../../components/Header/HeaderBar';
import Layout from '../../components/layouts';
import SideBar from '../../components/SideBar';
import listStudents from '../../static/dataTest/listStudent.json';


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
        console.log(listStudents);
        let list = listStudents.map((item, index) =>
            <tr key={index}>
                <td>{item.stdID}</td>
                <td>{item.name}</td>
                <td>
                    <span id="btn-online-check" className="btn-checkin">
                        <i class="fas fa-check" title="Có mặt"></i> 
                    </span>
                    <span id="btn-offline-check" className="btn-checkin"><i class="far fa-circle"></i></span>
                    <span id="btn-online-minus" className="btn-checkin"><i class="fas fa-minus"></i></span>
                    <span id="btn-online-plus" className="btn-checkin"><i class="fas fa-plus"></i></span>
                    <span>Chi tiết</span>
                </td>
                <td></td>
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
                                <h5 className="title">Điểm danh sinh viên</h5>
                            </div>
                            <div className="card-wrpr-body">
                                <div>
                                    Hôm nay ngày: {(today.getDate()) + "/ " + (today.getMonth() + 1) + "/ " + (today.getFullYear())}
                                </div>
                                <table className="list-check-in">
                                    <thead>
                                        <tr>
                                            <th>MSSV</th>
                                            <th>Họ tên</th>
                                            <th>Điểm danh</th>
                                            <th>Ghi chú</th>
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