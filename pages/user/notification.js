import React from 'react';
import Link from 'next/link';
import HeaderBar from '../../components/Header/HeaderBar';
import Layout from '../../components/layouts';
import SideBar from '../../components/SideBar';
import MainPage from './mainpage';


const rights = ['dash-board', 'notification', 'user-profile', 'student-list', 'time-table']

class NotificationPage extends React.Component {
    render() {
        console.log('Hello')

        return (
            <Layout>
                <HeaderBar role={'guest'}>
                    thinhdnnd
                </HeaderBar>
                <SideBar rights={rights} />
                <div className="content">
                    <div className="notification">
                        <div className="flex-container">
                            <div className="card-wrpr mt-15">
                                <div className="card-wrpr-header">
                                    <h5 className="title">Thông báo của tôi</h5>
                                </div>
                                <div className="card-wrpr-body">
                                    <ul>
                                        <li>Lịch thi học kỳ I của Trần Anh Thư - 24/10/2018 - 20:31</li>
                                        <li>Thông báo học phí của Trần Anh Thư</li>
                                        <li>Thông báo sinh viên học giáo dục quốc phòng vẫn tham gia học anh văn sơ cấp buổi tối - 19/10/2018 - 16:03</li>
                                        <li>Thư mời tham dự seminar trao đổi kiến thức </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-wrpr mt-15">
                                <div className="card-wrpr-header">
                                    <h5 className="title">Thông báo chung</h5>
                                </div>
                                <div className="card-wrpr-body">
                                    <ul>
                                        <li>Thông báo về việc học GDQP&AN đối với sinh viên khóa 2018 - 24/10/2018 - 20:31</li>
                                        <li>Thông báo Danh sách các lớp K13 nghỉ học từ ngày 5/11/2018 đến ngày 02/12/2018(cập nhật các lớp Anh văn) - 22/10/2018 - 14:36</li>
                                        <li>Thông báo sinh viên học giáo dục quốc phòng vẫn tham gia học anh văn sơ cấp buổi tối - 19/10/2018 - 16:03</li>
                                        <li>633-QĐ-ĐHCNTT-Quyết định về việc Xử lý học vụ học kỳ 2,3 năm học 2017-2018 - 19/10/2018 - 11:15</li>
                                        <li>THÔNG BÁO V/v tổ chức thi giữa học kỳ I năm học 2018 – 2019(cập nhật danh sách phòng thi) - 19/10/2018 - 10:14</li>
                                        <li>Thông báo kết quả phúc khảo điểm học kỳ hè năm học 2017-2018 khoa Công nghệ Phần mềm - 18/10/2018 - 10:24</li>
                                        <li>Thông báo kết quả phúc khảo điểm học kỳ hè năm học 2017-2018 khoa Khoa học máy tính - 11/10/2018 - 09:44</li>
                                        <li>Quyết định công nhận tốt nghiệp đại học đợt 7 năm 2018 - 11/10/2018 - 08:33</li>
                                        <li>Thông báo tổ chức Hội thảo giới thiệu về nghiên cứu khoa học cho sinh viên tại Trường Đại học Công nghệ Thông tin - 04/10/2018 - 11:09</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-wrpr mt-15">
                                <div className="card-wrpr-header">
                                    <h5 className="title">Thông báo nghỉ học bù</h5>
                                </div>
                                <div className="card-wrpr-body">
                                    <ul>
                                        <li>Thông báo học bù Anh văn 3 (ENG03.J112) ngày 07/11/2018 - 29/10/2018 - 10:06</li>
                                        <li>Thông báo học bù Anh văn 3 (ENG03.J11) ngày 07/11/2018 - 29/10/2018 - 10:06</li>
                                        <li>Thông báo sinh viên học giáo dục quốc phòng vẫn tham gia học anh văn sơ cấp buổi tối - 19/10/2018 - 16:03</li>
                                        <li>Thông báo nghỉ lớp Lập trình trực quan (IT008.J11) ngày 27/10/2018 - 25/10/2018 - 09:58</li>
                                        <li>Thông báo nghỉ lớp Lập trình trực quan (IT008.J11) ngày 27/10/2018 - 25/10/2018 - 09:58</li>
                                        <li>Thông báo nghỉ lớp Lập trình trực quan (IT008.J11) ngày 27/10/2018 - 25/10/2018 - 09:58</li>
                                        <li>Thông báo nghỉ lớp Lập trình trực quan (IT008.J11) ngày 27/10/2018 - 25/10/2018 - 09:58</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default NotificationPage;