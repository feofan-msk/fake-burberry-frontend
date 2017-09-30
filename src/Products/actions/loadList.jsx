export const LOAD_LIST_STARTED = 'LOAD_LIST_STARTED';
export const LOAD_LIST_SUCCEEDED = 'LOAD_LIST_SUCCEEDED';
export const LOAD_LIST_FAILED = 'LOAD_LIST_FAILED';

function loadListStarted() {
  return {
    type: LOAD_LIST_STARTED,
  };
}

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

export default function loadList(path, URL = `https://erodionov-burberry-fake-api.now.sh/${path}`) {
  return (dispatch) => {
    dispatch(loadListStarted());
    return fetch(URL)
      .then(response => Promise.all([response, response.json()]))
      .then(([response, json]) => {
        if (response.status === 200) {
          dispatch(loadListSucceeded(json));
        } else {
          dispatch(loadListFailed(response.status));
        }
      });
  };
}
