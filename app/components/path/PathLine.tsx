import type { PathElementProps } from './props';

interface PathLineProps extends PathElementProps {}

export const PathLine: React.FC<PathLineProps> = ({ style }) => {
  return <View style={style} />;
};