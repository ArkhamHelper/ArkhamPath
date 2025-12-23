import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useGetPaths } from '../../hooks/api/paths/usePaths';

export default function PathsTabScreen() {
  const { paths, error, isLoading } = useGetPaths(
    '086f4eb7-5d90-4ef2-9240-4c44e0348149',
  );

  if (error)
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  if (isLoading) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text>Paths</Text>
      <Text>{JSON.stringify(paths, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
