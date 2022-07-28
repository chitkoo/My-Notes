import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Activity = props => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    width={props.width}
    height={props.height}>
    <Path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </Svg>
);

export default Activity;
