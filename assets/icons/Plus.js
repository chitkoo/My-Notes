import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Plus = props => (
  <Svg
    viewBox="0 0 24 24"
    stroke={props.color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    width={props.width}
    height={props.height}>
    <Path d="M12 5v14M5 12h14" />
  </Svg>
);

export default Plus;
