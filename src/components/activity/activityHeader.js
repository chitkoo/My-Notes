import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';

//styles
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//icons
import Plus from '@assets/icons/Plus';
import Delete from '@assets/icons/Delete';
import Detail from '@assets/icons/Detail';
import List from '@assets/icons/List';

const activityHeader = props => {
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

          {/* detail button */}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.goDetail(item)}>
            <Detail width={wp(5)} height={wp(5)} color={'#fff'} />
          </TouchableOpacity>

          {/* delete button */}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.delete(item)}>
            <Delete width={wp(5)} height={wp(5)} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* title section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Activities</Text>
      </View>

      {/* list header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <View style={styles.headerTxtWrapper}>
            <Text style={styles.headerTxt}>
              Always keep track of activities 😎
            </Text>
          </View>

          {/* add button */}
          <TouchableOpacity style={styles.headerBtn} onPress={props.goForm}>
            <Plus width={wp(5)} height={wp(5)} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>

      {/* list item */}
      {props.data.length > 0 ? (
        <FlatList
          data={props.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderComponent}
        />
      ) : (
        <View>
          <Text style={{marginTop: hp(2), color: '#4B4453', alignSelf:'center'}}>No Activity yet!</Text>

          {/* <Image style={styles.img} source={require('@assets/images/note.png')}/> */}

          {/* <View>
            <List />
          </View> */}
        </View>
      )}
    </View>
  );
};

export default activityHeader;
