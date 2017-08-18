import { SETTINGS_SET_LOCALE } from '../actions/actionCreators';

export default function settings(state = { settings }, action) {
  switch (action.type) {
    case SETTINGS_SET_LOCALE:
      return { ...state, locale: action.payload };
    default:
      return state;
  }
}
