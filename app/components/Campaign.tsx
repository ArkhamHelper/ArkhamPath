import { StyleSheet } from 'react-native';
import type { Campaign } from '../models/campaign';
import { AppIcon } from './AppIcon';
import { Text, View } from './Themed';
import { TranslatedText } from './TranslatedText';
import { COLOR_FOR_CYCLE } from '../constants/colorsCycle';

interface CampaignElementProps {
  campaign: Campaign;
}

export const CampaignElement: React.FC<CampaignElementProps> = ({
  campaign,
}) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: COLOR_FOR_CYCLE[campaign.cycleCode] },
      ]}
    >
      <AppIcon size={'medium'} name={`${campaign.cycleCode}_campaign`} />
      <Text>{campaign.name}</Text>
      <View style={styles.difficultyContainer} color="background-accent">
        <TranslatedText text={campaign.difficulty} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  difficultyContainer: {
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
