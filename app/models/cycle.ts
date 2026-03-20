import type { Scenario } from './scenario';

export type CycleCode =
  | 'night_of_zealot'
  | 'the_dunwich_legacy'
  | 'the_path_to_carcosa'
  | 'the_forgotten_age'
  | 'the_circle_undone'
  | 'the_dream_eaters'
  | 'the_innsmouth_conspiracy'
  | 'edge_of_the_earth'
  | 'the_scarlet_keys'
  | 'the_feast_of_hemlock_vale'
  | 'the_drowned_city';

export interface Cycle {
  code: CycleCode;
  scenarios: Scenario[];
  scenariosList: string[];
}
