import type { Path } from '../../models/path';
import { Text, View } from '../Themed';
import { useCycle } from '../../hooks/useCycle';
import { PathScenario } from './Scenario';

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
    <View
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {scenarios?.map((scenario) => (
        <View key={scenario.code}>
          <PathScenario scenario={scenario} />
        </View>
      ))}
    </View>
  );
};
