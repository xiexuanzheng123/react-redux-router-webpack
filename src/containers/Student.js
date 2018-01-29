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
    validateName,
    validateSex
} from '../validation';
import {
    Alert
} from '../common';
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
        this.getStudentId = this.getStudentId.bind(this);
    }
    componentDidMount() {
        const { initStudent, actions, students } = this.props;
        const studentId = this.getStudentId('studentId');
        actions.getSelectedStudent(studentId, students);
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
        const isUpdate = student.id ? true : false;
        if (isUpdate) {
            actions.updateStudent(student.id, student);
            history.push('./');
        }
        if (validateName(student.name) && validateSex(student.sex) && !isUpdate) {
            actions.addStudent(student);
            history.push('./');
        } else if (!validateName(student.name)) {
            actions.showAlert(
                {
                    message: '请输入名字!',
                    okText: '确定',
                    okEvent: actions.hideAlert
                }
            );
        } else if (!validateSex(student.sex)) {
            actions.showAlert(
                {
                    message: '请选择性别！',
                    okText: '确定',
                    okEvent: actions.hideAlert
                }
            )
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
    okEvent () {
        this.setState({isShow: false});
    }
    getStudentId (key, url) {
        if (!url) {
            url = window.location.href;
        }
        key = key.replace(/[[\]]/g, '\\$&');
        let regex = new RegExp('[?&]' + key + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    render () {
        const { student, uHobby, uSexes, uAges, alert, students, actions } = this.props;
        return (
            <div className={Styles.wrap}>
                <StudentMessage
                    student={student}
                    uHobby={uHobby}
                    uSexes={uSexes}
                    uAges={uAges}
                    actions={actions}
                    students={students}
                    getStudentId={this.getStudentId} 
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
                <Alert 
                   {...alert} 
                />
            </div>
        ) 
    }
}
const mapStateToProps = (state) => {
    return {
        students: state.students,
        student: state.student,
        uHobby: state.uHobby,
        uSexes: state.uSexes,
        uAges: state.uAges,
        alert: state.alert
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Student));