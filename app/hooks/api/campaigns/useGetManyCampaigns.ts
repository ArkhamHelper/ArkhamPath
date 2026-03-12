import { useApi } from '../useApi';
import type { Campaign } from '../../../models/campaign';

interface GetManyCampaignsDto {
  limit: number;
  userId: string;
  name?: string;
  offset?: number;
  cycleCode?: string;
  difficultyId?: number;
}

export const useGetManyCampaigns = (props: GetManyCampaignsDto) => {
  const propsUrl = Object.entries(props)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  const { get } = useApi<Campaign[]>();
  const { data, error, isLoading } = get(
    `campaigns?${new URLSearchParams(propsUrl)}`,
  );

  return { campaigns: data, error, isLoading };
};
