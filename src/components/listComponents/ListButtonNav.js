import React from 'react';
import PropTypes from 'prop-types';
import { listNavStyles as Styles } from '../../styles/list';

class ListButtonNav extends React.Component {
    render () {
        const { 
            handleClickDeleteStudents, 
            handleClickSearch,
            handleEditKeyWord,
            studentChecked,
            handleClickAdd,
            handleClickUpdate
        } = this.props;
        const updateDisabled = studentChecked.length === 1 ? true : false;
        const deleteDisabled = studentChecked.length === 0 ? true : false;
        return (
            <div className={Styles.topNav}>
                <div className={Styles.topBtns}>
                    <a 
                        className={Styles.btnAdd} 
                        href='javascript: void(0)'
                        onClick={handleClickAdd}
                    >
                        添加
                    </a>
                    <a 
                        className={updateDisabled ? Styles.btnUpdate :  Styles.disabled}
                        onClick={handleClickUpdate}
                    >
                        修改
                    </a>
                    <a 
                        className={deleteDisabled ? Styles.disabled : Styles.btnDelete}
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