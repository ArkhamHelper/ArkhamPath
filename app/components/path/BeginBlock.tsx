import Svg, { Rect, Text } from 'react-native-svg';
import type { PathElementProps } from './props';

interface BeginBlockProps extends PathElementProps {}

export const BeginBlock: React.FC<BeginBlockProps> = ({
  width: svgWidth,
  height: svgHeight,
}) => {
  return (
    <Svg>
      <Rect
        width={svgWidth}
        height={svgHeight}
        rx="20"
        ry="20"
        fill="#485359"
      />
      <Text
        x={svgWidth / 2 + svgWidth * 0.1}
        y={svgHeight / 2 + svgHeight * 0.15}
        textAnchor="middle"
        fontSize={svgWidth * 0.15}
        fill="#fff"
      >
        Начало
      </Text>
    </Svg>
  );
};
