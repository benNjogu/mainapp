import {SET_TASKS, SET_TASK_ID} from '../constants/actionTypes';

export const setTasks = task => dispatch => {
  dispatch({
    type: SET_TASKS,
    payload: task,
  });
};

export const setTaskID = taskID => dispatch => {
  dispatch({
    type: SET_TASK_ID,
    payload: taskID,
  });
};
