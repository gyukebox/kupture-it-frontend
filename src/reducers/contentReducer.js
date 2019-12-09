import { LOAD_CONTENTS_SUCCESSFUL } from '../actions/contentActions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTENTS_SUCCESSFUL:
      return action.response;
    default:
      return state;
  }
};
