import type from './types';

const INITIAL_STATE = {
    name: null,
    tasks: []
};

const reducerHandler = (action, state = INITIAL_STATE) => {
    const reducerObject = {
        [type.SET_NAME]: () => ({
            ...state,
            name: action.value,
        }),
        [type.SET_TASK]: () => ({
            ...state,
            tasks: [...state.tasks, action.value],
        }),
        [type.DELETE_TASK]: () => ({
            ...state,
            tasks: state.tasks.filter(ele => ele.id !== action.value),
        }),
    };
    return (reducerObject[action.type] && reducerObject[action.type]()) || state;
};

const appReducer = (action, state) => reducerHandler(state, action);
export default appReducer;
