import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { COURSES } from '../config/routes';
import { LOGIN_STATE_LOGGED_IN } from '../store/defaultState';
import I18n from 'i18n-js';

export class HomeScreen extends Component {
  render() {
    if (this.props.loggedIn) {
      return <Redirect to={COURSES} />;
    }

    return (
      <div className="screen-centered alert">
        {I18n.t('tokenError.401')}
      </div>
    );
  }
}

function mapStateToProps({ currentUser: { loginState } }) {
  return { loggedIn: loginState === LOGIN_STATE_LOGGED_IN };
}

export default connect(mapStateToProps)(HomeScreen);
