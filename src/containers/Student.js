import React from 'react';
import * as actions from '../actions/actions';
import {
    browserHistory, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
    StudentMessage, 
    Buttons 
} from '../components/studentComponents';
import {
    validateName
} from '../validation';
import { mainPageStyles as Styles } from '../styles/student';

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickConfirm = this.handleClickConfirm.bind(this);
        this.handleClickCancel = this.handleClickCancel.bind(this);
        this.handleEditName = this.handleEditName.bind(this);
        this.handleEditAge = this.handleEditAge.bind(this);
        this.handleEditSex = this.handleEditSex.bind(this);
        this.handleCheckHobby = this.handleCheckHobby.bind(this);
        this.handleEditProfile = this.handleEditProfile.bind(this);
        this.handleEditMajor = this.handleEditMajor.bind(this);
        this.initStudent = this.initStudent.bind(this);
    }
    handleEditName (e) {
        const { actions } = this.props;
        actions.editName(e.target.value);
    }
    handleEditAge (e) {
        const { actions } = this.props;
        actions.editAge(e.target.value);
    }
    handleEditSex (e) {
        const { actions } = this.props;
        actions.editSex(e.target.value);
    }
    handleClickConfirm () {
        const { student, actions, history } = this.props;
        if (validateName(student.name)) {
            actions.addStudent(student);
            history.push('./');
        } else {
            alert('请输入姓名！');
        }
    }
    handleEditMajor (e) {
        const { actions } = this.props;
        actions.editMajor(e.target.value);
    }
    handleClickCancel () {
        const { history } = this.props;
        history.push('./StudentList');
    }
    handleCheckHobby (e) {
        const { actions } = this.props;
        actions.checkHobby(e.target.value);
    }
    handleEditProfile (e) {
        const { actions } = this.props;
        actions.editProfile(e.target.value);
    }
    initStudent() {
        const { actions } = this.props;
        actions.initStudent();
    }
    render () {
        const { student, uHobby } = this.props;
        return (
            <div className={Styles.wrap}>
                <StudentMessage
                    student={student}
                    uHobby={uHobby} 
                    initStudent={this.initStudent}
                    handleEditName={this.handleEditName}
                    handleEditAge={this.handleEditAge} 
                    handleEditSex={this.handleEditSex}
                    handleEditMajor={this.handleEditMajor}
                    handleCheckHobby={this.handleCheckHobby}
                    handleEditProfile={this.handleEditProfile}     
                />
                <Buttons 
                    handleClickConfirm={this.handleClickConfirm}
                    handleClickCancel={this.handleClickCancel}
                />
            </div>
        ) 
    }
}
const mapStateToProps = (state) => {
    return {
        student: state.student,
        uHobby: state.uHobby
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Student));