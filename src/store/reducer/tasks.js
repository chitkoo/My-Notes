import {
  ADD_TASKS,
  DELETE_DONE_TASKS,
  DELETE_TASKS,
  DONE_TASKS,
  UPDATE_TASKS,
} from '../type';

const initialState = {
  tasks: [],
  doneTasks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASKS:
      let newData = action.tasks;
      let updateData;

      const newTask = {
        id: state.tasks.length + 1,
        title: newData.title,
        description: newData.description,
        about: newData.about,
        day: newData.day,
        month: newData.month,
        year: newData.year,
      };
      updateData = [...state.tasks, newTask];

      return {...state, tasks: updateData};

    case UPDATE_TASKS:
      let currentData = action.updateTasks;
      let taskIndex = state.tasks.findIndex(item => item.id === currentData.id);

      const updateTask = [...state.tasks];
      updateTask[taskIndex] = currentData;

      return {
        ...state,
        tasks: updateTask,
      };

    //delete btn from activity screen
    case DELETE_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter(item => item.id !== action.taskId),
      };

    case DONE_TASKS:
      let currentTasks = action.doneTasks;
      let updateDoneTasks;

      const newDoneTasks = {
        id: state.doneTasks.length + 1,
        title: currentTasks.title,
        description: currentTasks.description,
        about: currentTasks.about,
        day: currentTasks.day,
        month: currentTasks.month,
        year: currentTasks.year,
      };
      updateDoneTasks = [...state.doneTasks, newDoneTasks];

      return {
        ...state,
        doneTasks: updateDoneTasks,
        tasks: state.tasks.filter(item => item.id !== currentTasks.id),
      };

    //delete button from finish
    case DELETE_DONE_TASKS:
      return {
        ...state,
        doneTasks: state.doneTasks.filter(
          item => item.id !== action.doneTaskId,
        ),
      };

    default:
      return {tasks: state.tasks, doneTasks: state.doneTasks};
  }
};
