import type { PathElementProps } from './props';
import { Text, View } from '../Themed';

interface BeginBlockProps extends PathElementProps {}

export const BeginBlock: React.FC<BeginBlockProps> = ({
  width,
  height,
  top,
  left,
}) => {
  return (
    <View>
      <View
        style={{
          flex: 1,
          width,
          height,
          top,
          left,
          borderWidth: 1,
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 24 }}>Начало</Text>
      </View>
    </View>
  );
};
