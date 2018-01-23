import React from 'react';
import * as actions from '../actions/actions';
import {
    browserHistory, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StudentMessage, Buttons } from '../components/studentComponents';

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickConfirm = this.handleClickConfirm.bind(this);
        this.handleClickCancel = this.handleClickCancel.bind(this);
        this.handleEditName = this.handleEditName.bind(this);
        this.handleEditAge = this.handleEditAge.bind(this);
        this.handleEditSex = this.handleEditSex.bind(this);
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
    render () {
        const { student } = this.props;
        return (
            <div>
                <StudentMessage
                    student={student} 
                    handleEditName={this.handleEditName}
                    handleEditAge={this.handleEditAge} 
                    handleEditSex={this.handleEditSex}     
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
        student: state.student
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Student));