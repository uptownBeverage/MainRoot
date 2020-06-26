import axios from 'axios';

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/user/me');
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const registerUser = (userInfo, callback) => async dispatch => { 
  const response = await axios.post('/user/signup', userInfo);
  dispatch({ type: 'USER_INFO', payload: response.data });
  callback && callback(response.data);
}


export const signInUser = (userInfo, callback) => async dispatch => { 
  const response = await axios.post('/user/login', userInfo);
  dispatch({ type: 'USER_INFO', payload: response.data });
  callback && callback(response.data);
}
