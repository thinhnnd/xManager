import React, { Component } from 'react';
// import Avatar from '../test-user-avatar2.jpg';
import axios from 'axios';

class UserProfile extends Component {
    getInfo() {
        axios.get(`http://10.41.177.61:3030/user`)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {

            });
    }
    render() {
        return (
            <div className="flex-container">
                <div className="card-box">
                    <div className="card-box-header">
                        <h3 class="title">Thông tin chi tiết</h3>

                    </div>
                    <div className="card-box-body">

                        <div className="user-profile">
                            <div>
                                <div className="avatar">
                                    <img src={Avatar} alt="avatar" />
                                </div>
                                
                            </div>
                            <div>
                                    <div><span className="bold">Họ tên:</span> Trần Anh Thư</div>
                                    <div><span className="bold">Ngày sinh:</span> 31/10/1998</div>
                                    <div><span className="bold">Khoa :</span> Mạng máy tính & Truyền thông</div>
                                    <div><span className="bold">Lớp </span> MMT2016 </div>
                                    <div><span className="bold">Họ tên:</span> Trần Anh Thư </div>
                                <div><span className="bold">Ngày sinh:</span> 31/10/1998</div>
                                <div><span className="bold">Đ/C thường trú: </span> BMT Đăk Lăk</div>
                                <div><span className="bold">Đ/C tạm trú:</span> KP6, P.Linh Trung, Q.Thủ Đức,TP HCM </div>
                                <div><span className="bold">SDT: </span>03844844</div>
                                <div><span className="bold">Email: </span>thutanh@uit.edu.vn</div>
                                <div><span className="bold">Nguời liên hệ:</span>Hoàng Bảo</div>
                                <div><span className="bold">Địa chỉ:</span> BMT Đăk Lăk</div>
                                <div><span className="bold">SDT:</span> 0231313213 </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UserProfile;