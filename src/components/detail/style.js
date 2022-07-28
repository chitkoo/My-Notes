import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  detailContainer: {
    backgroundColor: '#D8EFF8',
    width: wp(95),
    flexDirection: 'row',
    padding: wp(3),
    alignItems: 'center',
    marginTop: hp(5),
    borderRadius: wp(2),
  },
  leftWrapper: {
    width: '85%',
    marginRight: wp(1),
    borderRadius: wp(1),
  },
  txt: {
    fontSize: wp(5),
    marginBottom: hp(1),
    color: '#4B4453',
  },
  rightWrapper: {
    width: '15%',
  },
  editBtn: {
    backgroundColor: '#845EC2',
    alignItems: 'center',
    paddingVertical: wp(3),
    marginHorizontal: wp(1),
    borderRadius: wp(1),
    marginTop: hp(5),
  },
  doneBtn: {
    backgroundColor: '#845EC2',
    alignItems: 'center',
    padding: wp(3),
    marginTop: hp(1),
    padding: wp(3),
    borderRadius: wp(1),
    marginHorizontal: wp(1),
  },
});
export default styles;
