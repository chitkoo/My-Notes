import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Style';

//redux
import {useDispatch} from 'react-redux';
import * as actionTask from '../../store/action/tasks';

//comp
import DetailHeader from '../../components/detail/detailHeader';

const Detail = ({navigation, route}) => {
  const {data} = route.params;
  const dispatch = useDispatch();

  const goUpdate = () => {
    navigation.navigate('FormScreen', {btnAction: 'Update', currentData: data});
  };

  const finishHandler = () => {
    let doneTasks = {
      id: data.id,
      title: data.title,
      description: data.description,
      about: data.about,
      day: data.day,
      month: data.month,
      year: data.year,
    };

    dispatch(actionTask.doneTasks(doneTasks));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <DetailHeader data={data} update={goUpdate} done={finishHandler} />
    </View>
  );
};

export default Detail;
