import type { PathElementProps } from './props';
import { Text, View } from '../Themed';
import { useWindowDimensions } from 'react-native';

export const COMMON_NODE_HEIGHT_COEFFICIENT = 0.05;

interface CommonNodeProps extends PathElementProps {
  text: string;
}

export const CommonNode: React.FC<CommonNodeProps> = ({ text, style }) => {
  const { height: screenHeight } = useWindowDimensions();
  const commonNodeHeight = screenHeight * COMMON_NODE_HEIGHT_COEFFICIENT;

  return (
    <View
      style={{
        height: commonNodeHeight,
        display: 'flex',
        borderWidth: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    >
      <Text style={{ fontSize: 24 }}>{text}</Text>
    </View>
  );
};
