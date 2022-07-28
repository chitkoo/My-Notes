import React, {useEffect} from 'react';

//redux
import {useSelector, useDispatch} from 'react-redux';
import * as actionTask from '../../store/action/tasks';

//styles
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Style';

//comp
import ActivityHeader from '../../components/activity/activityHeader';

const Activity = ({navigation}) => {
  //redux
  const dispatch = useDispatch();
  const taskList = useSelector(state => state.taskList.tasks);

  const detailHandler = value => {
    navigation.navigate('DetailScreen', {data: value});
  };

  const formHandler = () => {
    navigation.navigate('FormScreen', {btnAction: 'Add'});
  };

  const deleteHandler = value => {
    dispatch(actionTask.deleteTasks(value.id));
    // console.log('deleted', value);
  };

  return (
    <View style={styles.container}>
      <ActivityHeader
        goDetail={detailHandler}
        goForm={formHandler}
        delete={deleteHandler}
        data={taskList}
      />
    </View>
  );
};

export default Activity;
