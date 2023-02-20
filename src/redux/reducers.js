import {SET_TASKS, SET_TASK_ID} from '../constants/actionTypes';

const initialState = {
  taskID: 1,
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {...state, tasks: action.payload};
    case SET_TASK_ID:
      return {...state, taskID: action.payload};
    default:
      return state;
  }
};

export default taskReducer;
