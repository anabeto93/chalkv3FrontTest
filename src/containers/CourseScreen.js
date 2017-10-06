import I18n from 'i18n-js';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import CoursesList from '../components/Course/CoursesList';
import UserPanel from '../components/Course/UserPanel';
import Error from '../components/Error';

export class CourseScreen extends Component {
  render() {
    const { courses, isFailValidating, locale } = this.props;

    return (
      <div>
        <UserPanel />
        <CoursesList courses={courses} />
        {isFailValidating &&
          <Error
            show={true}
            message={I18n.t('send.sms.validation.fail', { locale })}
          />}
      </div>
    );
  }
}

function mapStateToProps({
  content: { courses, isFailValidating },
  settings: { locale }
}) {
  return { courses, isFailValidating, locale };
}

export default connect(mapStateToProps)(CourseScreen);
