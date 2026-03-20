import type { CycleCode } from './cycle';

export interface Campaign {
  id: string;
  name: string;
  difficulty: string;
  cycleCode: CycleCode;
}
