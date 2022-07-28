import React, {useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from './style';

const formHeader = props => {
  const day = props.date.getDate();
  const month = props.date
    .toLocaleString('en-US', {month: 'long'})
    .substring(4, 7);
  const year = props.date.getFullYear();

  return (
    <View style={styles.container}>
      {/* title section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {props.btnAction === 'Add' ? 'Create' : 'Update'} Activity
        </Text>
      </View>

      {/* input section */}
      <View style={styles.inputContainer}>
        {/* title input  */}
        <TextInput
          style={styles.input}
          placeholder="Title....."
          placeholderTextColor={'#4B4453'}
          onChangeText={props.onChangeTitle}
          value={props.title}
        />

        {/* description input */}
        <TextInput
          style={styles.input}
          placeholder="Description....."
          placeholderTextColor={'#4B4453'}
          onChangeText={props.onChangeDescription}
          value={props.description}
        />

        {/* about input */}
        <TextInput
          style={[styles.input, {textAlignVertical: 'top'}]}
          placeholder="About....."
          placeholderTextColor={'#4B4453'}
          multiline={true}
          numberOfLines={3}
          onChangeText={props.onChangeAbout}
          value={props.about}
        />

        {/* date input */}
        <View style={styles.dateContainer}>
          <View style={styles.dateWrapper}>
            <Text style={styles.date}>
              {props.date ? day + ', ' + month + ', ' + year : 'DD/MM/YY'}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.dateBtn}
            activeOpacity={0.5}
            onPress={props.selectDate}>
            <Text style={styles.dateBtnTxt}>Select Date</Text>
          </TouchableOpacity>
        </View>

        {/* create button & update btn */}

        {props.btnAction === 'Add' ? (
          <TouchableOpacity
            disabled={props.inValidCreateBtn ? true : false}
            style={
              props.inValidCreateBtn
                ? [styles.createBtn, {opacity: 0.5}]
                : styles.createBtn
            }
            activeOpacity={0.5}
            onPress={props.createAction}>
            <Text style={styles.create}>Create</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            disabled={props.inValidUpdateBtn ? true : false}
            style={
              props.inValidUpdateBtn
                ? [styles.createBtn, {opacity: 0.5}]
                : styles.createBtn
            }
            activeOpacity={0.5}
            onPress={props.updateAction}>
            <Text style={styles.create}>Update</Text>
          </TouchableOpacity>
        )}

        {/* cancel button */}
        <TouchableOpacity
          style={styles.cancelBtn}
          activeOpacity={0.5}
          onPress={props.cancelAction}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default formHeader;
