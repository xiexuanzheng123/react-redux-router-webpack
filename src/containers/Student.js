import React from 'react';
import * as actions from '../actions/actions';
import {
    browserHistory, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import StudentContent from '../components/StudentContent';
import Buttons from '../components/Buttons';

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickConfirm = this.handleClickConfirm.bind(this);
        this.handleClickCancel = this.handleClickCancel.bind(this);
        this.handleEditName = this.handleEditName.bind(this);
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
    handleClickConfirm ({
        name: name,
        age: age,
        sex: sex
    }) {

        actions.addStudent(
            {
                name,
                age,
                sex
            }
        );
    }
    handleClickCancel () {
        alert('cancel');
    }
    render () {
        return (
            <div>
                <StudentContent 
                    handleEditName={this.handleEditName}    
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