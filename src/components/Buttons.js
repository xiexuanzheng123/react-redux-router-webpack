import React from 'react';

class Buttons extends React.Component {
    render () {
        const { handleClickConfirm, handleClickCancel } = this.props;
        return (
            <div>
                <a 
                    href="javascript: void(0)" 
                    onClick={handleClickConfirm}
                >
                    Confirm
                </a>
                <a 
                    href="javascript: void(0)" 
                    onClick={handleClickCancel}
                >
                    Cancel
                </a>
            </div>
        )
    }
}
export default Buttons;