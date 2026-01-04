import type { PathElementProps } from './props';
import { Text, View } from '../Themed';

interface CommonNodeProps extends PathElementProps {
  text: string;
}

export const CommonNode: React.FC<CommonNodeProps> = ({ text, style }) => {
  return (
    <View
      style={{
        ...style,
        display: 'flex',
        borderWidth: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 24 }}>{text}</Text>
    </View>
  );
};
