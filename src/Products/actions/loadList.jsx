export const LOAD_LIST_STARTED = 'LOAD_LIST_STARTED';
export const LOAD_LIST_SUCCEEDED = 'LOAD_LIST_SUCCEEDED';
export const LOAD_LIST_FAILED = 'LOAD_LIST_FAILED';

function loadListSucceeded(content) {
  return {
    type: LOAD_LIST_SUCCEEDED,
    content,
  };
}

function loadListFailed(error) {
  return {
    type: LOAD_LIST_FAILED,
    error,
  };
}

export default function loadList(
  path,
  URL = `https://feofan-burberry-fake-api.now.sh/${path}`,
) {
  return (dispatch) => {
    dispatch({
      type: LOAD_LIST_STARTED,
    });

    return fetch(URL)
      .then((response) => {
        if (response.ok) return response.json();
        throw dispatch(loadListFailed(response.status));
      })
      .then(content => dispatch(loadListSucceeded(content)));
  };
}
