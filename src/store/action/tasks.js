import {
  ADD_TASKS,
  DELETE_DONE_TASKS,
  DELETE_TASKS,
  DONE_TASKS,
  UPDATE_TASKS,
} from '../type';

export const addTasks = data => {
  return {
    type: ADD_TASKS,
    tasks: data,
  };
};

export const updateTasks = data => {
  return {
    type: UPDATE_TASKS,
    updateTasks: data,
  };
};

export const deleteTasks = id => {
  return {
    type: DELETE_TASKS,
    taskId: id,
  };
};

export const doneTasks = data => {
  return {
    type: DONE_TASKS,
    doneTasks: data,
  };
};

export const deleteDoneTask = id => {
  return {
    type: DELETE_DONE_TASKS,
    doneTaskId: id,
  };
};
