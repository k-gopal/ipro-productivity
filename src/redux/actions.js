import types from './types';

export const setName = (value) => (dispatch) => {
    return dispatch({ type: types.SET_NAME, value: value });
};

export const setTask = (value) => (dispatch) => {
    return dispatch({ type: types.SET_TASK, value: value });
};

export const deleteTask = (value) => (dispatch) => {
    return dispatch({ type: types.DELETE_TASK, value: value });
};
