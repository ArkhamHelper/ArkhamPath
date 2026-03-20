import { StyleSheet } from 'react-native';
import type { Campaign } from '../models/campaign';
import { AppIcon } from './AppIcon';
import { Text } from '@/components/Text';
import { View } from '@/components/View';
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
      <View style={styles.campaignTitleContainer}>
        <AppIcon
          size={'medium'}
          name={`${campaign.cycleCode}_campaign`}
          style={styles.campaignTitleIcon}
        />
        <Text size="large" style={styles.campaignTitleText}>
          {campaign.name}
        </Text>
      </View>
      <View style={styles.difficultyContainer} color="background-secondary">
        <TranslatedText
          style={styles.difficultyText}
          text={campaign.difficulty}
        />
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
  campaignTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  campaignTitleIcon: {
    marginRight: 8,
  },
  campaignTitleText: {
    fontFamily: 'Conkordia-Regular',
  },
  difficultyContainer: {
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  difficultyText: {
    fontFamily: 'Conkordia-Regular',
  },
});
