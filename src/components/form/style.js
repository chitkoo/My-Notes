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

  //title
  titleContainer: {
    width: wp(95),
    alignItems: 'center',
    marginTop: hp(3),
    marginBottom: hp(1),
  },
  title: {
    fontSize: wp(7),
    fontWeight: 'bold',
    color: '#4B4453',
  },

  //input
  inputContainer: {
    width: wp(85),
  },
  input: {
    backgroundColor: '#fff',
    fontSize: wp(5),
    margin: wp(1),
    paddingHorizontal: wp(5),
    borderRadius: wp(3),
    color: '#4B4453',
    borderWidth: wp(0.7),
    borderColor: '#845EC2',
    marginTop: hp(2),
  },

  //date input
  dateContainer: {
    flexDirection: 'row',
    padding: wp(1),
    alignItems: 'center',
    marginTop: hp(1),
  },
  dateWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    marginRight: hp(1),
    width: '65%',
    padding: wp(3),
    borderRadius: wp(2),
    borderWidth: wp(0.7),
    borderColor: '#845EC2',
  },
  date: {
    fontSize: wp(4),
    color: '#4B4453',
  },
  dateBtn: {
    backgroundColor: '#845EC2',
    width: '35%',
    alignItems: 'center',
    padding: wp(3.5),
    borderRadius: wp(2),
  },
  dateBtnTxt: {
    fontSize: wp(4),
    color: '#fff',
    fontWeight: 'bold',
  },

  //button
  createBtn: {
    backgroundColor: '#845EC2',
    marginTop: hp(2),
    alignItems: 'center',
    padding: wp(2.5),
    borderRadius: wp(2),
  },
  cancelBtn: {
    marginTop: hp(2),
    alignItems: 'center',
    padding: wp(1.8),
    borderRadius: wp(2),
    borderWidth: wp(0.5),
    borderColor: '#845EC2',
  },
  create: {
    fontSize: wp(5),
    color: '#fff',
  },
  cancel: {
    fontSize: wp(5),
    color: '#845EC2',
  },
});
export default styles;
