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

  //title section
  titleContainer: {
    width: wp(95),
    alignItems: 'center',
    marginTop: hp(5),
  },
  title: {
    fontSize: wp(7),
    fontWeight: 'bold',
    color: '#4B4453',
  },

  //header section
  headerContainer: {
    width: wp(95),
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    borderBottomColor: '#4B4453',
    borderBottomWidth: wp(0.1),
    height: hp(6),
    marginTop: hp(1),
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTxtWrapper: {
    flex: 1,
  },
  headerTxt: {
    fontSize: wp(4),
    color: '#4B4453',
  },
  headerBtn: {
    backgroundColor: '#845EC2',
    padding: wp(1.5),
    borderRadius: wp(1),
  },

  //list item
  listContainer: {
    backgroundColor: '#E1EDF2',
    width: wp(95),
    height: wp(20.5),
    marginTop: hp(2),
    padding: wp(2),
    borderRadius: wp(1.5),
    shadowColor: '#000',
    shadowOffset: {
      width: wp(1),
      height: wp(1),
    },
    shadowOpacity: 0.25,
    shadowRadius: wp(1),
    elevation: 5,
  },
  listWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  dateWrapper: {
    backgroundColor: '#845EC2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
    padding: wp(2),
  },
  date: {
    color: '#fff',
  },
  taskWrapper: {
    flex: 1,
    marginHorizontal: wp(2),
    height: '100%',
    alignItems: 'flex-start',
  },
  taskTitle: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginBottom: wp(0.5),
    color: '#4B4453',
  },
  taskDescription: {
    color: '#4B4453',
  },
  btn: {
    backgroundColor: '#845EC2',
    marginHorizontal: wp(1),
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp(1.5),
    borderRadius: wp(1),
  },
  deletBtnWrapper: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: wp(50),
    height: wp(50),
    marginTop: hp(2),
    borderRadius: hp(3),
  },
});
export default styles;
