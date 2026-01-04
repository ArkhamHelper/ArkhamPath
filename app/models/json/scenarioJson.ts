export interface ScenarioJson {
  code: string;
  id_AC: string; //ID из ArkhamCards
  lines: ScenarioLineJson[];
  blocks: (ScenarioResolutionJson | ScenarioEventJson)[];
  isInterlude?: boolean;
}

export interface ScenarioLineJson {
  startBlockCode: string;
  startBlockPadding: number; //Процент отступа от левого края блока
  endBlockCode: string;
  endBlockPadding: number; //Процент отступа от левого края блока
}

export interface ScenarioResolutionJson extends Block {
  title: string;
  effects?: string[];
  conditions?: string[];
}

interface ScenarioEventJson extends Block {
  text: string;
  eventType: ScenarioEventType;
  isSpoiler?: boolean; //Возможно перенести в настройки пользователя
}

type ScenarioEventType = 'have_journal_note' | 'on_win_score' | '...';

export interface ScenarioEffectJson extends Block {
  text: string;
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
  //Отступ от левого верхнего угла экрана в процентах
  x: number;
  y: number;
}
