import type {
  ScenarioConditionJson,
  ScenarioEffectJson,
  ScenarioJson,
} from './scenarioJson';

export interface CycleJson {
  code: string;
  scenariosList: string[];
  scenarios: ScenarioJson[];
  effects: ScenarioEffectJson[];
  conditions: ScenarioConditionJson[];
}
