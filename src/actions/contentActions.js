const contents = [
  {
    id: 'post-1234',
    author: 'gyukebox',
    text:
      'Lorem ipsum dolor sit amet, consectetur ' +
      'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ' +
      'ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
      ' cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
      'sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: null,
    latitude: 37.5407667,
    longitude: 127.0771541,
  },
  {
    id: 'post-5678',
    author: 'gyukebox',
    text:
      'Lorem ipsum dolor sit amet, consectetur ' +
      'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ' +
      'ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
      ' cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
      'sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: null,
    latitude: 37.5407667,
    longitude: 127.0771541,
  },
  {
    id: 'post-9012',
    author: 'gyukebox',
    text:
      'Lorem ipsum dolor sit amet, consectetur ' +
      'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ' +
      'ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
      ' cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
      'sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: null,
    latitude: 37.5407667,
    longitude: 127.0771541,
  },
  {
    id: 'post-3456',
    author: 'gyukebox',
    text:
      'Lorem ipsum dolor sit amet, consectetur ' +
      'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ' +
      'ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
      ' cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
      'sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: null,
    latitude: 37.5407667,
    longitude: 127.0771541,
  },
  {
    id: 'post-7890',
    author: 'gyukebox',
    text:
      'Lorem ipsum dolor sit amet, consectetur ' +
      'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ' +
      'ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
      ' cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
      'sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: null,
    latitude: 37.5407667,
    longitude: 127.0771541,
  },
];

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

export const loadContents = (limit = 5, offset = 1) => async dispatch => {
  dispatch(startLoadContents());
  try {
    return dispatch(
      loadContentsSuccessful(contents.slice(offset - 1, offset + limit - 1)),
    );
  } catch (error) {
    return dispatch(loadContentsFailed(error));
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
    console.log(author);
    console.log(text);
    console.log(image);
    console.log(latitude);
    console.log(longitude);
    return dispatch(createContentSuccessful(''));
  } catch (error) {
    return dispatch(createContentFailed(error));
  }
};
