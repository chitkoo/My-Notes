import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//styles
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './style';

//icons
import DoneIcon from '@assets/icons/Done';
import EditIcon from '@assets/icons/Edit';

const detailHeader = props => {
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <View style={styles.leftWrapper}>
          <Text style={styles.txt}>Title : {props.data.title}</Text>
          <Text style={styles.txt}>
            Date :{' '}
            {props.data.day + '.' + props.data.month + '.' + props.data.year}
          </Text>
          <Text style={styles.txt}>Description : {props.data.description}</Text>
          <Text style={styles.txt}>Detail : {props.data.detail}</Text>
        </View>

        {/* button */}
        <View style={styles.rightWrapper}>
          {/* edit */}
          <TouchableOpacity style={styles.editBtn} onPress={props.update}>
            <EditIcon width={wp(5)} height={wp(5)} color={'#fff'} />
          </TouchableOpacity>
          {/* done */}
          <TouchableOpacity style={styles.doneBtn} onPress={props.done}>
            <DoneIcon width={wp(5)} height={wp(5)} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default detailHeader;
