import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionTypes';
import { withRouter } from 'react-router';
import StudentMessage from '../components/StudentMessage';

class StudentList extends React.Component {
    render () {
        const { students } = this.props;
        console.log(students);
        return (
            <div>
                <h2>学生列表</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Sex</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student, key) => {
                                return (
                                    <StudentMessage 
                                        student={student}
                                        key={key}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        students: state.students
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentList));