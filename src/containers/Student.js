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
        actions.addStudent(student);
        history.push('./');
    }
    handleClickCancel () {
        alert('cancel');
    }
    handleCheckHobby (e) {
        const { actions } = this.props;
        actions.checkHobby(e.target.value);
    }
    render () {
        const { student, uHobby } = this.props;
        return (
            <div className={Styles.wrap}>
                <StudentMessage
                    student={student}
                    uHobby={uHobby} 
                    handleEditName={this.handleEditName}
                    handleEditAge={this.handleEditAge} 
                    handleEditSex={this.handleEditSex}
                    handleCheckHobby={this.handleCheckHobby}     
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