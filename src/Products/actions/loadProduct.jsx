export const LOAD_PRODUCT_STARTED = 'LOAD_PRODUCT_STARTED';
export const LOAD_PRODUCT_SUCCEEDED = 'LOAD_PRODUCT_SUCCEEDED';
export const LOAD_PRODUCT_FAILED = 'LOAD_PRODUCT_FAILED';

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
  URL = `https://feofan-burberry-fake-api.now.sh/${path}`,
) {
  return (dispatch) => {
    dispatch({
      type: LOAD_PRODUCT_STARTED,
    });

    return fetch(URL)
      .then((response) => {
        if (response.ok) return response.json();
        throw dispatch(loadProductFailed(response.status));
      })
      .then(content => dispatch(loadProductSucceeded(content)));
  };
}
