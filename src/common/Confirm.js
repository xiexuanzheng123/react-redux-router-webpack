import React from 'react';
import PropTypes from 'prop-types';

import { AlertStyles as Styles } from '../../styles/popup';

const propTypes = {
    message: PropTypes.string.isRequired,
    isShow: PropTypes.bool.isRequired,
    confirmEvent: PropTypes.func.isRequired,
    cancelEvent: PropTypes.func,
    okText: PropTypes.string.isRequired,
    cancelText: PropTypes.string.isRequired
};
class Confirm extends React.Component {
    render () {
        const { isShow, message, okText, cancelText, confirmEvent, cancelEvent } = this.props;
        return (
            isShow ? 
            <div className={Styles.container}>
                <div className={Styles.popup}>
                    <span 
                        className={Styles.close}
                        onClick={cancelEvent}
                    >
                    </span>
                    <div className={Styles.content}>
                        <div className={Styles.message}>
                            {message}
                        </div>
                        <div className={Styles.buttonBar}>
                            <button className={Styles.confirm} onClick={confirmEvent}>{okText}</button>
                            <button onClick={cancelEvent}>{cancelText}</button>
                        </div>
                    </div>
                </div>
            </div>
            : null
        );
    }
}
Confirm.propTypes = propTypes;
export default Confirm;