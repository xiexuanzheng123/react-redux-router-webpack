import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionTypes';
import { withRouter } from 'react-router';
import { 
    StudentMessage, 
    ListButtonNav 
} from '../components/listComponents';
import { listStyles as Styles } from '../styles/list';

class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickAdd = this.handleClickAdd.bind(this);
    }
    handleClickAdd() {
        const { history } = this.props;
        history.push('./addStudent');
    }
    render () {
        const { students } = this.props;
        return (
            <div className={Styles.wrap}>
                <h2 className={Styles.title}>学生列表</h2>
                <ListButtonNav />
                <table>
                    <thead>
                        <tr>
                            <th>名字</th>
                            <th>年龄</th>
                            <th>性别</th>
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
                {/* <a href="javascript:void(0)" onClick={this.handleClickAdd}>添加新生</a> */}
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