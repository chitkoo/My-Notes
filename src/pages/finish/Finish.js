import React from 'react';

//redux
import {useSelector, useDispatch} from 'react-redux';
import * as actionTask from '../../store/action/tasks';

//styles
import {View, Text} from 'react-native';
import styles from './Style';

//comp
import FinishHeader from '../../components/finish/finishHeader';

const Finish = () => {
  const finishData = useSelector(state => state.taskList.doneTasks);

  const dispatch = useDispatch();

  const deleteFinishTasks = value => {
    dispatch(actionTask.deleteDoneTask(value.id));
  };

  return (
    <View style={styles.container}>
      <FinishHeader data={finishData} deleteFinish={deleteFinishTasks} />
    </View>
  );
};

export default Finish;
