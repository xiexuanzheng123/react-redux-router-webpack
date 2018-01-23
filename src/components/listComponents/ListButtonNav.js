import React from 'react';
import PropTypes from 'prop-types';
import { listNavStyles as Styles } from '../../styles/list';

class ListButtonNav extends React.Component {
    render () {
        const { 
            handleClickDeleteStudents, 
            handleClickSearch,
            handleEditKeyWord,
            studentChecked
        } = this.props;
        return (
            <div className={Styles.topNav}>
                <div className={Styles.topBtns}>
                    <a className={Styles.btnAdd} href='./addStudent'>添加</a>
                    <a 
                        className={Styles.btnUpdate}
                    >
                        修改
                    </a>
                    <a 
                        className={Styles.btnDelete}
                        onClick={handleClickDeleteStudents}
                    >
                        删除
                    </a>
                </div>
                <div className={Styles.searchPart}>
                    <input 
                        className={Styles.searchBox} 
                        placeholder={`请输入学生名字`}
                        onChange={handleEditKeyWord}
                    />
                    <button 
                        className={Styles.searchBtn}
                        onClick={handleClickSearch}
                    >
                        搜索
                    </button>
                </div>
            </div>
        )
    }
}
export default ListButtonNav;