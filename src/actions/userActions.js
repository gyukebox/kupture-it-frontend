import api from '../http';

export const START_LOGIN = 'START_LOGIN';
export const START_SOCIAL_LOGIN = 'START_SOCIAL_LOGIN';
export const START_REGISTER = 'START_REGISTER';

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const REGISTER_SUCCESSFUL = 'REGISTER_SUCCESSFUL';

export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SOCIAL_LOGIN_FAILED = 'SOCIAL_LOGIN_FAILED';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const LOGOUT = 'LOGOUT';

export const startLogin = () => ({ type: START_LOGIN });
export const startSocialLogin = () => ({ type: START_SOCIAL_LOGIN });
export const startRegister = () => ({ type: START_REGISTER });

export const logout = () => ({ type: LOGOUT });

export const loginSuccessful = response => ({
  type: LOGIN_SUCCESSFUL,
  response,
});
export const registerSuccessful = response => ({
  type: REGISTER_SUCCESSFUL,
  response,
});

export const loginFailed = error => ({ type: LOGIN_FAILED, error });
export const socialLoginFailed = error => ({
  type: SOCIAL_LOGIN_FAILED,
  error,
});
export const registerFailed = error => ({ type: REGISTER_FAILED, error });

export const login = (id, password) => async dispatch => {
  dispatch(startLogin());
  try {
    const response = await api.post('/auth/login', { id, password });
    dispatch(loginSuccessful(response.data));
  } catch (error) {
    try {
      const response = await api.post('/auth/register', { id, password });
      dispatch(registerSuccessful(response.data));
    } catch (anotherError) {
      dispatch(loginFailed(anotherError));
    }
  }
};

export const socialLogin = provider => async dispatch => {
  dispatch(startSocialLogin());

  if (provider === 'kakao' && 'Kakao' in window) {
    const { Kakao } = window;
    Kakao.Auth.login({
      throughTalk: false,
      success: authObj => {
        const { access_token: accessToken } = authObj;
        Kakao.Auth.setAccessToken(accessToken);
      },
      fail: errorObj => {
        dispatch(socialLoginFailed(errorObj));
      },
    });

    try {
      const { properties } = await Kakao.API.request({
        url: '/v2/user/me',
      });
      console.log(properties);
      dispatch(loginSuccessful(properties));
    } catch (error) {
      dispatch(socialLoginFailed(error));
    }
  }
};

export const register = (id, password) => async dispatch => {
  dispatch(startRegister());
  try {
    const response = await api.post('/auth/register', { id, password });
    dispatch(registerSuccessful(response.data));
  } catch (error) {
    dispatch(registerFailed(error));
  }
};
