import http from '../http';

export const START_LOAD_CONTENTS = 'START_LOAD_CONTENTS';
export const LOAD_CONTENTS_SUCCESSFUL = 'LOAD_CONTENTS_SUCCESSFUL';
export const LOAD_CONTENTS_FAILED = 'LOAD_CONTENTS_FAILED';

export const START_CREATE_CONTENT = 'START_CREATE_CONTENT';
export const CREATE_CONTENT_SUCCESSFUL = 'CREATE_CONTENT_SUCCESSFUL';
export const CREATE_CONTENT_FAILED = 'CREATE_CONTENT_FAILED';

export const startLoadContents = () => ({ type: START_LOAD_CONTENTS });
export const loadContentsSuccessful = response => ({
  type: LOAD_CONTENTS_SUCCESSFUL,
  response,
});
export const loadContentsFailed = error => ({
  type: LOAD_CONTENTS_FAILED,
  error,
});

export const startCreateContent = () => ({ type: START_CREATE_CONTENT });
export const createContentSuccessful = response => ({
  type: CREATE_CONTENT_SUCCESSFUL,
  response,
});
export const createContentFailed = error => ({
  type: CREATE_CONTENT_FAILED,
  error,
});

export const loadContents = () => async dispatch => {
  dispatch(startLoadContents());
  try {
    const response = await http.get('/posts');
    dispatch(loadContentsSuccessful([...response.data]));
  } catch (error) {
    dispatch(loadContentsFailed(error));
  }
};

export const createContent = (
  author,
  text,
  image,
  latitude,
  longitude,
) => async dispatch => {
  dispatch(startCreateContent());
  try {
    const response = await http.post('/posts', {
      author,
      text,
      image,
      latitude,
      longitude,
    });
    return dispatch(createContentSuccessful(response.data));
  } catch (error) {
    return dispatch(createContentFailed(error));
  }
};
