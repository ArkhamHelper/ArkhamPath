import type { ScenarioBlock } from '../../models/scenario';
import { View } from '@/components/View';
import type { PathElementProps } from './props';

interface PathConnectionProps extends PathElementProps {
  block: ScenarioBlock;
}

export const PathConnection: React.FC<PathConnectionProps> = ({
  block,
  style,
}) => (
  <View
    key={`connection-${block.code}`}
    style={{
      ...style,
      borderRadius: '50%',
      backgroundColor: 'black',
    }}
  />
);
