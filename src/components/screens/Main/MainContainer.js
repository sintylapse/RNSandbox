import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Main from './Main'

import * as authActions from '../../../actions/authActions.js'

class MainContainer extends React.Component {

    render() {
        return (
            <Main {...this.props} />
        )
    }

}

const mapStateToProps = state => ({
    exampleValue: state.authReducer.exampleValue,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(authActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
