export interface Scenario {
  code: string;
  id_AC: string; //ID из ArkhamCards
  blocks: Block[];
  lines: ScenarioLine[];
  isInterlude?: boolean;
  setup?: ScenarioEvent[];
}
export interface ScenarioLine {
  startBlock: Block;
  startBlockPadding: number; //Процент отступа от левого края блока
  endBlock: Block;
  endBlockPadding: number; //Процент отступа от левого края блока
}

export interface ScenarioResolution extends Block {
  title: string;
  effects?: ScenarioEffect[];
  conditions?: ScenarioEvent[];
}

export interface ScenarioEvent extends Block {
  text: string;
  eventType: ScenarioEventType;
  isSpoiler?: boolean; //Возможно перенести в настройки пользователя
}

type ScenarioEventType = 'have_journal_note' | 'on_win_score' | '...';

export interface ScenarioEffect extends Block {
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

interface Block {
  code: string;
  width: number;
  coordinates: PathCoordinates;
  blockType: BlockType;
}

type BlockType =
  | 'start'
  | 'setup'
  | 'end'
  | 'resolution'
  | 'event'
  | 'effect'
  | 'playerChoice';

interface PathCoordinates {
  x: number;
  y: number;
}
