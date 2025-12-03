import { CampaignsInfrastructure } from '../campaigns.infrastructure';
import { GetManyCampaignsFixture } from './getManyCampaigns.fixture';

describe('GetManyCampaigns', () => {
  const fixture = new GetManyCampaignsFixture();
  const infrastructure = new CampaignsInfrastructure();

  beforeAll(async () => {
    infrastructure.campaignRepository.set(fixture.campaigns);
  });
});
