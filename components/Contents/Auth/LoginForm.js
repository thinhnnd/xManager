import React, {Component} from 'react';
import axios from 'axios';
import Link from 'next/link'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
    }
    handleLogIn (event) {

        var userNameInput = document.getElementById('username');
        var passwordInput = document.getElementById('password');
        let loginData = {
            username: userNameInput.value,
            password: passwordInput.value
        }
        axios.post('http://10.41.177.62:3030/login', loginData)
        .then(result => {

            const userLogin = result.data;
            alert(result.data);
            // console.log(userLogin);
            // let {getLoginData} = this.props;
            // getLoginData(userLogin);
        })
        .catch(err => {
            window.location.href = '/';
            console.log(err);
        })
    console.log('sent');
    event.preventDefault();

    }

    handleSubmit(event) {
        console.log("Submit");
        event.preventDefault();
        var userNameInput = document.getElementById('username');
        var passwordInput = document.getElementById('password');
        
        let loginData = {
            username: userNameInput.value,
            password: passwordInput.value
        }
        console.log(loginData);
        
        // axios.post("http://10.41.177.62:3030/login", loginData)
        // .then(res => {
        //     console.log(res.data);
        // })
        // .catch(error =>{
        //     console.log(error);
        // }
        // );
        axios.post('http://10.41.177.62:3030/login', loginData)
        .then(res => {

            const userLogin = res.data;
            console.log(userLogin);
        })
        .catch(err => {
            window.location.href = '/';

            console.log(err);
        })
    } 

    render() {
        return (
            <div className="account-bubble">
            <div className="card-wrpr">
                <div className="card-wrpr-header">
                    <div>Đăng nhập vào XManager</div>
                </div>
                <div className="card-wrpr-body align-self-center">
                    <div className="account-form ">
                        <form className="login-form" >
                            <div className="form-box">
                                <input id="username" name="username" placeholder="Username" />
                                <span className="account-icon"><i className="fas fa-user" type="text"></i></span>
                            </div>
                            <div className="form-box">
                                <input id="password" name="password" type="password" placeholder="Password" />
                                <span className="account-icon"><i className="fas fa-lock"></i></span>
                            </div>
                            <div className="form-box">
                                <Link href="sign-up">
                                    <a>Quên mật khẩu?</a>
                                </Link>
                            </div>
                            <div className="btn form-box">
                                {/* <button id="btn-sign-in" onClick={this.handleSubmit} type="button">Đăng nhập</button> */}
                                <Link href='/user/mainpage'>
                                    <button id="btn-sign-in" type="button">Đăng nhập</button>
                                </Link>
                            </div>
                            <div className="btn form-box">
                                <span>Không có tài khoản? </span>
                                <Link href="./sign-up">
                                    <button id="btn-sign-up" type="button">Đăng Ký</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default LoginForm;