import type { Scenario } from './scenario';

export interface Cycle {
  code: string;
  scenarios: Scenario[];
  scenariosList: string[];
}
