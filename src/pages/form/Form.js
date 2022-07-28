import React, {useState, useEffect} from 'react';

//reducer
import {useDispatch} from 'react-redux';
import * as actionTask from '../../store/action/tasks';

import {View, Text} from 'react-native';
import styles from './Style';

//date picker
import DateTimePicker from '@react-native-community/datetimepicker';

import FormHeader from '../../components/form/formHeader';

const Form = ({navigation, route}) => {
  //redux
  const dispatch = useDispatch();

  //action
  const [action, setAction] = useState('');
  const {btnAction, currentData} = route.params;

  useEffect(() => {
    if (btnAction === 'Add') {
      setAction('Add');
    } else {
      setAction('Update');
    }
  }, []);

  //input values
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [about, setAbout] = useState('');

  //date
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const inValidCreateBtn =
    title === '' || description === '' || about === '' || date === '';

  const inValidUpdateBtn =
    title === '' || description === '' || about === '' || date === '';

  const createHandler = () => {
    let taskData = {
      title: title,
      description: description,
      about: about,
      day: date.getDate(),
      month: date.toLocaleString('en-US', {month: 'long'}).substring(4, 7),
      year: date.getFullYear(),
    };

    dispatch(actionTask.addTasks(taskData));

    setTitle('');
    setDescription('');
    setAbout('');

    navigation.goBack();
  };

  const updateHandler = () => {
    let updateData = {
      id: currentData.id,
      title: title,
      description: description,
      about: about,
      day: date.getDate(),
      month: date.toLocaleString('en-US', {month: 'long'}).substring(4, 7),
      year: date.getFullYear(),
    };
    dispatch(actionTask.updateTasks(updateData));

    navigation.navigate('ActivityScreen');
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <FormHeader
        createAction={createHandler}
        cancelAction={cancelHandler}
        updateAction={updateHandler}
        onChangeTitle={value => setTitle(value)}
        title={title}
        onChangeDescription={value => setDescription(value)}
        description={description}
        onChangeAbout={value => setAbout(value)}
        about={about}
        selectDate={showDatepicker}
        date={date}
        btnAction={action}
        inValidCreateBtn={inValidCreateBtn}
        inValidUpdateBtn={inValidUpdateBtn}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Form;
