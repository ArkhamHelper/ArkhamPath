export interface Scenario {
  code: string;
  id_AC: string; //ID из ArkhamCards
  blocks: ScenarioBlock[];
  lines: ScenarioLine[];
  isInterlude?: boolean;
  setup?: ScenarioEvent[];
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
  | 'event'
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
  conditions?: ScenarioEvent[];
}

export interface ScenarioEvent extends ScenarioBlock {
  text: string;
  eventType: ScenarioEventType;
  isSpoiler?: boolean; //Возможно перенести в настройки пользователя
}

type ScenarioEventType =
  | 'have_journal_note'
  | 'on_win_score'
  | 'player_choice'
  | '...';

export interface ScenarioEffect extends ScenarioBlock {
  text: string;
  effectType: ScenarioEffectType;
  count?: number;
  conditions?: ScenarioEvent[];
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
