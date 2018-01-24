import React from 'react';
import { buttonsStyles as Styles } from '../../styles/student';

class Buttons extends React.Component {
    render () {
        const { 
            handleClickConfirm, 
            handleClickCancel 
        } = this.props;
        return (
            <div className={Styles.subButtons}>
                <a 
                    className={Styles.btnConfirm}
                    href="javascript: void(0)" 
                    onClick={handleClickConfirm}
                >
                    确定
                </a>
                <a 
                    className={Styles.btnCancel}
                    href="javascript: void(0)" 
                    onClick={handleClickCancel}
                >
                    取消
                </a>
            </div>
        )
    }
}
export default Buttons;