import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//icons
import Delete from '@assets/icons/Delete';


const finishHeader = props => {
  const renderComponent = ({item}) => {
    return (
      <View style={styles.listContainer}>
        <View style={styles.listWrapper}>
          {/* date */}
          <View style={styles.dateWrapper}>
            <Text style={styles.date}>{item.day}</Text>
            <Text style={styles.date}>{item.month}</Text>
            <Text style={styles.date}>{item.year}</Text>
          </View>

          {/* task */}
          <View style={styles.taskWrapper}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.taskDescription}>{item.description}</Text>
          </View>

          {/* delete button */}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.deleteFinish(item)}>
            <Delete width={wp(5)} height={wp(5)} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Finished Tasks</Text>
      </View>

      <View style={styles.divider} />

      {props.data.length > 0 ? (
        <FlatList
          data={props.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderComponent}
        />
      ) : (
        <View>
          <Text>Empty</Text>
        </View>
      )}
    </View>
  );
};

export default finishHeader;
