import type { DimensionValue, ViewStyle } from 'react-native';

export interface PathElementProps {
  top: number;
  left: number;
  width: DimensionValue;
  style?: ViewStyle;
  height?: DimensionValue;
}
