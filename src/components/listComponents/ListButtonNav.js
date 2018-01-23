import React from 'react';
import PropTypes from 'prop-types';
import { listNavStyles as Styles } from '../../styles/list';

class ListButtonNav extends React.Component {
    render () {
        const { handleClickDeleteStudents } = this.props;
        return (
            <div className={Styles.topNav}>
                <div className={Styles.topBtns}>
                    <a className={Styles.btnAdd} href='./addStudent'>添加</a>
                    <a className={Styles.btnUpdate}>修改</a>
                    <a 
                        className={Styles.btnDelete}
                        onClick={handleClickDeleteStudents}
                    >
                        删除
                    </a>
                </div>
                <div className={Styles.searchPart}>
                    <input className={Styles.searchBox}/>
                    <button className={Styles.searchBtn}>搜索</button>
                </div>
            </div>
        )
    }
}
export default ListButtonNav;