import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Detail = props => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-list"
    {...props}>
    <Path d="M8 6h13M8 12h13M8 18h13M3 6h0M3 12h0M3 18h0" />
  </Svg>
);

export default Detail;
