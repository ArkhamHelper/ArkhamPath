import type { Path } from '../../models/path';
import { Text, View } from '../Themed';
import { useCycle } from '../../hooks/useCycle';
import { PathScenario } from './Scenario';
import { ScrollView } from 'react-native';

interface PathSchemaProps {
  userPath: Path;
}

export const PathSchema = ({ userPath }: PathSchemaProps) => {
  const { scenarios } = useCycle();

  if (!scenarios?.length) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading scenarios...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1, width: '100%' }}
      contentContainerStyle={{
        position: 'relative',
        minHeight: '200%',
        width: '100%',
        backgroundColor: 'white',
      }}
    >
      {scenarios?.map((scenario) => (
        <View key={scenario.code}>
          <PathScenario scenario={scenario} />
        </View>
      ))}
    </ScrollView>
  );
};
