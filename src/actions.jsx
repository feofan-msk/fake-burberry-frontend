export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS_LIST = 'FETCH_SUCCESS_LIST';
export const FETCH_SUCCESS_PRODUCT = 'FETCH_SUCCESS_PRODUCT';
export const FETCH_ERROR = 'FETCH_ERROR';

function fetchDataRequest() {
  return {
    type: FETCH_REQUEST,
  };
}

function fetchListSuccess(payload) {
  return {
    type: FETCH_SUCCESS_LIST,
    payload,
  };
}

function fetchProductSuccess(payload) {
  return {
    type: FETCH_SUCCESS_PRODUCT,
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

export default function fetchWithRedux(path, destination) {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    return fetchData(path).then(([response, json]) => {
      if (response.status === 200) {
        if (destination === 'list') {
          dispatch(fetchListSuccess(json));
        } else if (destination === 'product') {
          dispatch(fetchProductSuccess(json));
        }
      } else {
        dispatch(fetchDataError(response.status));
      }
    });
  };
}
