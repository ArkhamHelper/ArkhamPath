import type { Scenario } from './scenario';

export interface Path {
  id: string;
  userId: string;
  cycleCode: string;
  dateLastFetchArkhamCards: Date;
  data: Scenario[];
}
