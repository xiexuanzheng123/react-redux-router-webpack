import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import { withRouter } from 'react-router-dom';
import { 
    StudentContent, 
    ListButtonNav 
} from '../components/listComponents';
import { listStyles as Styles } from '../styles/list';

class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleSelectStudent = this.handleSelectStudent.bind(this);
        this.handleClickDeleteStudents = this.handleClickDeleteStudents.bind(this);
        this.handleClickSearch = this.handleClickSearch.bind(this);
        this.handleEditKeyWord = this.handleEditKeyWord.bind(this);
    }
    handleClickAdd () {
        const { history } = this.props;
        history.push('./addStudent');
    }
    handleSelectStudent (e) {
        const { actions } = this.props;
        actions.selectStudent(e.target.id);
    }
    handleClickDeleteStudents () {
        const { actions, studentChecked } = this.props;
        actions.deleteStudents(studentChecked);
    }
    handleClickSearch () {
        const { actions, keyWord, history } = this.props;
        actions.searchStudent(keyWord);
        history.push(`/StudentList?keyWord=${keyWord}`);
    }
    handleEditKeyWord (e) {
        const { actions } = this.props;
        actions.editKeyWord(e.target.value);
    }
    render () {
        const { students, studentChecked } = this.props;
        return (
            <div className={Styles.wrap}>
                <h2 className={Styles.title}>学生列表</h2>
                <ListButtonNav 
                    handleClickDeleteStudents={this.handleClickDeleteStudents}
                    handleClickSearch={this.handleClickSearch}
                    handleEditKeyWord={this.handleEditKeyWord}
                    studentChecked={studentChecked}
                />
                <div className={Styles.mainList}>
                    <table className={Styles.listTable}>
                        <thead>
                            <tr>
                                <th></th>
                                <th className={Styles.name}>名字</th>
                                <th className={Styles.age}>年龄</th>
                                <th className={Styles.sex}>性别</th>
                                <th className={Styles.major}>专业</th>
                                <th className={Styles.hobby}>兴趣爱好</th>
                                <th className={Styles.profile}>个人简介</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((student, key) => {
                                    return (
                                        <StudentContent
                                            handleSelectStudent={this.handleSelectStudent}
                                            handleClickDeleteStudents={this.handleClickDeleteStudents}
                                            studentChecked={studentChecked} 
                                            student={student}
                                            key={key}
                                        />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        students: state.students,
        studentChecked: state.studentChecked,
        keyWord: state.keyWord
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentList));