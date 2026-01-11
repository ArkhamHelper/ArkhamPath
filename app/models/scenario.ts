export interface Scenario {
  code: string;
  id_AC: string; //ID из ArkhamCards
  blocks: ScenarioBlock[];
  lines: ScenarioLine[];
  isInterlude?: boolean;
  setup?: ScenarioEffect[];
}

export interface ScenarioBlock {
  code: string;
  width: number;
  blockType: BlockType;
  coordinates: PathCoordinates;
}

type BlockType =
  | 'start'
  | 'setup'
  | 'end'
  | 'resolution'
  | 'condition'
  | 'effect'
  | 'playerChoice'
  | 'connection';

export interface ScenarioLine {
  startBlock: ScenarioBlock;
  startBlockPadding: number; //Процент отступа от левого края блока
  endBlock: ScenarioBlock;
  endBlockPadding: number; //Процент отступа от левого края блока
  controlPointX: number;
  controlPointY: number;
}

export interface ScenarioResolution extends ScenarioBlock {
  title: string;
  effects?: ScenarioEffect[];
  conditions?: ScenarioCondition[];
}

export interface ScenarioCondition extends ScenarioBlock {
  text: string;
  conditionType: ScenarioConditionType;
  count?: number;
  value?: string;
  isSpoiler?: boolean; //Возможно перенести в настройки пользователя
}

type ScenarioConditionType =
  | 'have_journal_note'
  | 'on_win_score'
  | 'player_choice'
  | '...';

export interface ScenarioEffect extends ScenarioBlock {
  text: string;
  effectType: ScenarioEffectType;
  count?: number;
  conditions?: ScenarioCondition[];
}

type ScenarioEffectType =
  | 'add_card'
  | 'add_token'
  | 'add_journal_note'
  | 'add_xp'
  | 'add_trauma'
  | 'kill'
  | '...';

interface PathCoordinates {
  x: number;
  y: number;
}
