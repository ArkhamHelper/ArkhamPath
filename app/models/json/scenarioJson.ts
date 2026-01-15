export interface ScenarioJson {
  code: string;
  id_AC: string; //ID из ArkhamCards
  lines: ScenarioLineJson[];
  blocks: (ScenarioResolutionJson | ScenarioConditionBlockJson)[];
  isInterlude?: boolean;
}

export interface ScenarioLineJson {
  startBlockCode: string;
  startBlockPadding: number; //Процент отступа от левого края блока
  endBlockCode: string;
  endBlockPadding: number; //Процент отступа от левого края блока
  controlPointX: number;
  controlPointY: number;
}

export interface ScenarioResolutionJson extends Block {
  effects?: string[];
  conditions?: string[];
}

export interface ScenarioConditionBlockJson extends Block {
  eventType: ScenarioConditionType;
  count?: number;
  value?: string;
  isSpoiler?: boolean; //Возможно перенести в настройки пользователя
}

export interface ScenarioConditionJson {
  code: string;
  conditionType: ScenarioConditionType;
  count?: number;
  value?: string;
}

type ScenarioConditionType =
  | 'have_journal_note'
  | 'on_win_score'
  | 'player_choice'
  | 'game_state'
  | '...';

export interface ScenarioEffectJson {
  code: string;
  effectType: ScenarioEffectType;
  count?: number;
  conditions?: string[];
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
  | 'playerChoice';

interface PathCoordinates {
  //Отступ от левого верхнего угла экрана в процентах
  x: number;
  y: number;
}
