export const LOAD_PRODUCT_STARTED = 'LOAD_PRODUCT_STARTED';
export const LOAD_PRODUCT_SUCCEEDED = 'LOAD_PRODUCT_SUCCEEDED';
export const LOAD_PRODUCT_FAILED = 'LOAD_PRODUCT_FAILED';

function loadProductStarted() {
  return {
    type: LOAD_PRODUCT_STARTED,
  };
}

function loadProductSucceeded(content) {
  return {
    type: LOAD_PRODUCT_SUCCEEDED,
    content,
  };
}

function loadProductFailed(error) {
  return {
    type: LOAD_PRODUCT_FAILED,
    error,
  };
}

export default function loadProduct(
  path,
  URL = `https://erodionov-burberry-fake-api.now.sh/${path}`,
) {
  return (dispatch) => {
    dispatch(loadProductStarted());
    return fetch(URL)
      .then(response => Promise.all([response, response.json()]))
      .then(([response, json]) => {
        if (response.status === 200) {
          dispatch(loadProductSucceeded(json));
        } else {
          dispatch(loadProductFailed(response.status));
        }
      });
  };
}
