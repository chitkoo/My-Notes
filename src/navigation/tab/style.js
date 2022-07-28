import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  label: {
    fontSize: hp(1.6),
    paddingBottom: hp(0.5),
  },
  customeTab: {
    position: 'absolute',
    bottom: hp(2.5),
    marginHorizontal: wp(2.5),
    backgroundColor: '#D8EFF8',
    width: wp(95),
    height: hp(8),
    borderRadius: wp(3),
    shadowColor: '#000',
    shadowOffset: {
      width: hp(1),
      height: hp(1),
    },
    shadowOpacity: 0.025,
    shadowRadius: hp(1),
    elevation: 4
  },
});
export default styles;
