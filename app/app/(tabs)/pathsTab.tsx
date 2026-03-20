import { StyleSheet } from 'react-native';

import { Text } from '@/components/Text';
import { View } from '@/components/View';
import { useGetPaths } from '../../hooks/api/paths/usePaths';
import { PathSchema } from '../../components/path/PathSchema';
import { useCycle } from '../../hooks/useCycle';

export default function PathsTabScreen() {
  const { paths, error, isLoading } = useGetPaths(
    '086f4eb7-5d90-4ef2-9240-4c44e0348149',
  );
  const { changeCycle } = useCycle();

  if (error)
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  if (isLoading)
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      {paths?.length && <PathSchema userPath={paths[0]} />}
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
