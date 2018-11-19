import React, { Component } from 'react';
import axios from 'axios';

class StudentsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://10.41.177.61:3030/user`)
            .then(res => {
                let data = res.data;
                this.setState({ data: data });
            })
            .catch(err => {
                console.log(JSON.stringify(err));
            });
    }

    render() {
        let { data } = this.state;
        // console.log(data);
        // let jsx = data.map((obj, i) => {
        //     return (
        //         <div key= {i}>

        //         </div>
        //     );
        // })
        if (data.length === 0 && data !== null)
            return <div className="loading"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> 
        else {
            console.log(data);
            let jsx = data.map((item, index) => {
                return (
                    <div key={index} className="tr">
                        <div className="tc">{index + 1}</div>
                        <div className="tc">{item.student_id}</div>
                        <div className="tc">{item.name}</div>
                        <div className="tc">{item.birth}</div>
                        <div className="tc">{item.class}</div>
                    </div>
                );
            });
            console.log(jsx);
            return (
                <div className="flex-container flex-container-center">
                    <div className="card-box">
                        <div className="card-box-header">
                            <div >
                                <h5>Danh sách sinh viên</h5>
                            </div>
                        </div>
                        <div className="card-box-body">
                            <div className="learning-result">
                                <div className="table">
                                    <div className="tr tr-primary">
                                        <div className="tc">STT</div>
                                        <div className="tc">MSSV</div>
                                        <div className="tc">Họ tên</div>
                                        <div className="tc">Ngày sinh</div>
                                        <div className="tc">Mã lóp</div>
                                    </div>
                                    {jsx}
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>

                    </div>

                </div>
            );
        }

    }
}

export default StudentsList;
