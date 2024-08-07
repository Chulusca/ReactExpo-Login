import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export default function SvgTop() {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={width} height={height / 2} style={{ position: 'absolute', zIndex: -1 }}>
        <Defs>
          <LinearGradient id="a" x1={0} x2={1} y1={1} y2={0}>
            <Stop offset="0%" stopColor="rgba(248, 117, 55, 1)" />
            <Stop offset="100%" stopColor="rgba(195.875, 23.292, 163.965, 1)" />
          </LinearGradient>
        </Defs>
        <Path
          fill="none"
          stroke="url(#a)"
          d="M26-33.6c5.2 7 5.1 17.5 7 27.9 2 10.3 5.9 20.4 3.1 27.7-2.9 7.3-12.5 11.9-22.4 15.5-10 3.6-20.3 6.3-29.6 3.9s-17.6-9.8-20-18.5c-2.4-8.6 1.2-18.5 4.3-27.2 3.1-8.7 5.6-16.1 10.8-23.1 5.2-7 13-13.5 22.1-15 9.1-1.6 19.5 1.8 24.7 8.8Z"
          style={{ transition: "all .3s ease 0s" }}
          transform="translate(50 50)"
        />
      </Svg>
    );
  }