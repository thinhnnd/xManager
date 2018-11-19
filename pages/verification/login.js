import React from 'react';
import Link from 'next/link';
import MinifiedHeader from '../../components/Header/MinifiedHeader';
import LoginForm from '../../components/Contents/Auth/LoginForm'
import Layout from '../../components/layouts';

class LoginPage extends React.Component {
    render() {
        return (
            <div className="container">
                <Layout>
                    <MinifiedHeader />
                    <div className="show-case">
                        <LoginForm />
                    </div>
                </Layout>
            </div>
        );
    }
}

export default LoginPage;