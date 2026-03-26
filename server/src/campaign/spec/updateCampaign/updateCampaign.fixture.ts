import type { UpdateCampaignDto } from '../../dto/updateCampaign.dto';
import type { CampaignModel } from '../../model/campaign.model';

export class UpdateCampaignFixture {
  campaigns: CampaignModel[] = [
    {
      id: '1',
      userId: '1',
      data: {
        scenarios: {
          blocks: [
            {
              blockType: 'start',
              code: 'start',
              width: 0.5,
              coordinates: { x: 0.25, y: 0 },
            },
          ],
          lines: [],
        },
      },
      name: 'Dunwich User 1 Diff 1',
      cycleCode: 'the_dunwich_legacy',
      difficulty: { id: 1, name: 'easy_difficulty' },
    },
    {
      id: '2',
      userId: '1',
      data: {
        scenarios: {
          blocks: [
            {
              blockType: 'start',
              code: 'start',
              width: 0.5,
              coordinates: { x: 0.25, y: 0 },
            },
            {
              blockType: 'end',
              code: 'end',
              width: 0.1,
              coordinates: { x: 0.25, y: 0.2 },
            },
          ],
          lines: [
            {
              startBlockCode: 'start',
              endBlockCode: 'end',
            },
          ],
        },
      },
      name: 'Dunwich User 1 Diff 1',
      cycleCode: 'the_dunwich_legacy',
      difficulty: { id: 1, name: 'easy_difficulty' },
    },
  ];

  getAddDataBlocksAndLines = (): UpdateCampaignDto => ({
    id: '1',
    data: {
      add: {
        blocks: [{ blockType: 'end', code: 'end' }],
        lines: [{ startBlockCode: 'start', endBlockCode: 'end' }],
      },
      remove: {},
    },
  });

  expectedAddDataBlocksAndLines = (): CampaignModel => ({
    id: '1',
    userId: '1',
    name: 'Dunwich User 1 Diff 1',
    cycleCode: 'the_dunwich_legacy',
    difficulty: { id: 1, name: 'easy_difficulty' },
    data: {
      scenarios: {
        blocks: [
          {
            blockType: 'start',
            code: 'start',
            width: 0.5,
            coordinates: { x: 0.25, y: 0 },
          },
          {
            blockType: 'end',
            code: 'end',
          },
          { blockType: 'end', code: 'end' },
        ],
        lines: [
          {
            startBlockCode: 'start',
            endBlockCode: 'end',
          },
        ],
      },
    },
  });

  getRemoveDataBlocksAndLines = (): UpdateCampaignDto => ({
    id: '2',
    data: {
      add: {},
      remove: {
        blocks: ['end'],
        lines: [{ startBlockCode: 'start', endBlockCode: 'end' }],
      },
    },
  });

  expectedRemoveDataBlocksAndLines = (): CampaignModel => ({
    id: '2',
    userId: '1',
    name: 'Dunwich User 1 Diff 1',
    cycleCode: 'the_dunwich_legacy',
    difficulty: { id: 1, name: 'easy_difficulty' },
    data: {
      scenarios: {
        blocks: [
          {
            blockType: 'start',
            code: 'start',
            width: 0.5,
            coordinates: { x: 0.25, y: 0 },
          },
        ],
        lines: [],
      },
    },
  });

  getRemoveAndAddDataBlocksAndLines = (): UpdateCampaignDto => ({
    id: '2',
    data: {
      add: {
        blocks: [{ blockType: 'resolution', code: 'final_res' }],
      },
      remove: {
        blocks: ['end'],
        lines: [{ startBlockCode: 'start', endBlockCode: 'end' }],
      },
    },
  });

  expectedRemoveAndAddDataBlocksAndLines = (): CampaignModel => ({
    id: '2',
    userId: '1',
    name: 'Dunwich User 1 Diff 1',
    cycleCode: 'the_dunwich_legacy',
    difficulty: { id: 1, name: 'easy_difficulty' },
    data: {
      scenarios: {
        blocks: [
          {
            blockType: 'start',
            code: 'start',
            width: 0.5,
            coordinates: { x: 0.25, y: 0 },
          },
          {
            blockType: 'resolution',
            code: 'final_res',
          },
          { blockType: 'resolution', code: 'final_res' },
        ],
        lines: [],
      },
    },
  });

  getInvalidCampaignId = (): UpdateCampaignDto => ({
    id: '4',
  });

  getRemoveNonExistentBlock = (): UpdateCampaignDto => ({
    id: '1',
    data: {
      add: {},
      remove: {
        blocks: [{ blockType: 'end', code: 'start' }],
      },
    },
  });
}
