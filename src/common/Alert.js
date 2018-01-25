import React from 'react';
import PropTypes from 'prop-types';
import { AlertStyles as Styles } from '../styles/popup';

class Alert extends React.Component {
    render() {
        const {
            isShow,
            message,
            okText,
            okEvent
        } = this.props;
        console.log(isShow, 'isShow');
        return (
            isShow ? <div className={Styles.container}>
                <div className={Styles.popup}>
                    <span
                        className={Styles.close}
                        onClick={okEvent}
                    >
                    </span>
                    <div className={Styles.content}>
                        <div className={Styles.message}>
                            {message}
                        </div>
                        <div className={Styles.buttonBar}>
                            <button 
                                className={Styles.confirm}
                                onClick={okEvent}
                            >
                                {okText}
                            </button> 
                        </div>
                    </div>
                </div>
            </div> : null
        );
    }
}

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    isShow: PropTypes.bool.isRequired,
    okEvent: PropTypes.func.isRequired,
    okText: PropTypes.string.isRequired
}

export default Alert;