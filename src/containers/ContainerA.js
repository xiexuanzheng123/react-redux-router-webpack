import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionTypes';
import { withRouter } from 'react-router';

class ContainerA extends React.Component {
    render () {
        const { persion } = this.props;
        console.log(this.props);
        return (
            <div>
                {persion.age}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        persion: state.persion
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContainerA));