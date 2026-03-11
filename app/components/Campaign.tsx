import { useTranslate } from '../hooks/useTranslate';
import type { Campaign } from '../models/campaign';
import { Text, View } from './Themed';

interface CampaignElementProps {
  campaign: Campaign;
}

export const CampaignElement: React.FC<CampaignElementProps> = ({
  campaign,
}) => {
  const { translate } = useTranslate();

  return (
    <View>
      {/**
       * @TODO CycleIcon
       */}
      <Text>{campaign.name}</Text>
      <View>
        <Text>{translate(campaign.difficulty)}</Text>
      </View>
    </View>
  );
};
