import React, { Component } from 'react';

class SideBar extends Component {
    handleClick = (val) => {
        alert("Hello number " + val );
        // let { clickSpecialButton } = this.props;
        // clickSpecialButton(val);
    }

    getUserData = (data) => {
        let {getLogInData} = this.props;
        getLogInData(data);
    }

    renderSideBar() {
        let { rights } = this.props;
        let jsx = [];
        if (rights !== null) {
            for (let i = 0; i < rights.length; i++) {
                if (rights[i].indexOf('dash-board') === 0)
                    jsx.push(<li key={i} onClick={() => this.handleClick('dash-board')}><i className="fas fa-tachometer-alt"></i>Dashboard</li>)
                if (rights[i].indexOf('notification') === 0)
                    jsx.push(<li key={i} onClick={() => this.handleClick('notification')}><i className="fas fa-bell"></i>Thông báo</li>)
                if (rights[i].indexOf('user-profile') === 0)
                    jsx.push(<li key={i} onClick={() => this.handleClick('user-profile')}><i className="fas fa-user"></i>Hồ sơ của tôi</li>)
                if (rights[i].indexOf('student-list') === 0)
                    jsx.push(<li key={i} onClick={() => this.handleClick('student-list')}><i className="fas fa-user"></i>Danh sách sinh viên</li>)
                if (rights[i].indexOf('time-table') === 0)
                    jsx.push(<li key={i} onClick={() => this.handleClick('time-table')}><i className="fas fa-calendar"></i>Thời khóa biểu</li>)
            }
        } else {
        }
        return jsx;
    }

    render() {
        return (

            <div id="left-menu" className="child menu showing-slide">
            <ul>
               {this.renderSideBar()}
            </ul>
        </div>
        
        );
    }
}

export default SideBar;
