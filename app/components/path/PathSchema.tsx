import type { Path } from '../../models/path';
import { Text } from '@/components/Text';
import { View } from '@/components/View';
import { useCycle } from '../../hooks/useCycle';
import { PathScenario } from './Scenario';
import { ScrollView } from 'react-native';
import { useTranslate } from '../../hooks/useTranslate';
import type { Scenario } from '../../models/scenario';

interface PathSchemaProps {
  userPath: Path;
}

export const PathSchema = ({ userPath }: PathSchemaProps) => {
  const { scenarios } = useCycle();
  const { translate } = useTranslate();

  if (!scenarios?.length || !userPath?.data?.length) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading scenarios...</Text>
      </View>
    );
  }

  const renderScenario = (scenarioCode: string) => {
    const userScenario = userPath.data.find(
      (scenario: Scenario) => scenario.code === scenarioCode,
    );

    if (!userScenario)
      return (
        <View>
          <Text>Error. Scenario {translate(scenarioCode)} not found</Text>
        </View>
      );

    return (
      <View key={scenarioCode}>
        <PathScenario scenario={userScenario} />
      </View>
    );
  };

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
      {scenarios?.map((scenario) => renderScenario(scenario.code))}
    </ScrollView>
  );
};
