import type { ScenarioEffectJson, ScenarioJson } from './scenarioJson';

export interface CycleJson {
  code: string;
  scenariosList: string[];
  scenarios: ScenarioJson[];
  effects: ScenarioEffectJson[];
}
