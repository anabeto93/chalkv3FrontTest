import I18n from 'i18n-js';
import { RaisedButton, FlatButton } from 'material-ui';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import { SESSION_DETAIL, SESSION_LIST } from '../config/routes';
import generateUrl from '../services/generateUrl';

class ValidatedSession extends Component {
  handleRedirectNextSession = () => {
    if (null === this.props.nextSession) {
      return;
    }

    return this.props.history.push(
      generateUrl(SESSION_DETAIL, {
        ':courseUuid': this.props.nextSession.courseUuid,
        ':sessionUuid': this.props.nextSession.uuid
      })
    );
  };

  handleRedirectSessionList = () => {
    this.props.history.push(
      generateUrl(SESSION_LIST, {
        ':courseUuid': this.props.session.courseUuid,
        ':folderUuid': this.props.session.folderUuid
      })
    );
  };

  render() {
    const { locale } = this.props;

    return (
      <div className="screen-centered">
        <h4>
          {I18n.t('send.validation.success', { locale })}
        </h4>
        <FlatButton
          label={I18n.t('send.sessionListButton', { locale })}
          onClick={this.handleRedirectSessionList}
          style={{ marginRight: '10px', fontSize: '10px', width: '60%' }}
          secondary={true}
        />
        {null !== this.props.nextSession &&
          <RaisedButton
            primary={true}
            onClick={this.handleRedirectNextSession}
            label={I18n.t('send.nextButton', { locale })}
            style={{ width: '20%' }}
          />}
      </div>
    );
  }
}

export default withRouter(ValidatedSession);