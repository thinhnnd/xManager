import React from 'react';
import Link from 'next/link';
import MinifiedHeader from '../../components/Header/MinifiedHeader';
import Layout from '../../components/layouts';
import SignUpForm from '../../components/Contents/Auth/SignUpForm';

class Create extends React.Component {
    render() {
        return (
            <div className="container">
                <Layout>
                    <MinifiedHeader />
                    <div className="show-case">
                        <SignUpForm />
                    </div>
                </Layout>
            </div>
        );
    }
}

export default Create;