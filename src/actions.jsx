export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

function fetchDataRequest() {
  return {
    type: FETCH_REQUEST,
  };
}

function fetchDataSuccess(payload) {
  return {
    type: FETCH_SUCCESS,
    payload,
  };
}

function fetchDataError(error) {
  return {
    type: FETCH_ERROR,
    error,
  };
}

function fetchData(path) {
  const URL = `https://erodionov-burberry-fake-api.now.sh/${path}`;
  return fetch(URL).then(response => Promise.all([response, response.json()]));
}

export default function fetchDataWithRedux(path) {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    return fetchData(path).then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchDataSuccess(json));
      } else {
        dispatch(fetchDataError(response.status));
      }
    });
  };
}
