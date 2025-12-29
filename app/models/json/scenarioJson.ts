export interface ScenarioJson {
  code: string;
  id_AC: string; //ID из ArkhamCards
  coordinates: {
    end: PathCoordinates;
    start: PathCoordinates;
    setup?: PathCoordinates;
  };
  resolutions: ScenarioResolution[]; //Все возможные исходы сценария
  isInterlude?: boolean;
  setup?: ScenarioEvent[];
  notRequiredLocations?: ScenarioLocation[];
  notRequiredUniqueEnemies?: ScenarioEnemy[];
}

interface ScenarioResolution {
  code: string;
  title: string;
  width: number;
  pathCoordinates: PathCoordinates;
  effects?: string[];
  conditions?: string[];
}

interface ScenarioEvent {
  code: string;
  text: string;
  type: ScenarioEventType;
  pathCoordinates: PathCoordinates;
  isSpoiler?: boolean; //Возможно перенести в настройки пользователя

  /*
        Возможно убрать, так как нет таких событий

        + странно делать проверку, чтобы сделать проверку
        везде используется массив conditions, где легче проверить все условия 
    */
  condition?: ScenarioEvent;
}

type ScenarioEventType = 'have_journal_note' | 'on_win_score' | '...';

export interface ScenarioEffectJson {
  code: string;
  text: string;
  type: ScenarioEffectType;
  count?: number;
  conditions?: string[];
  pathCoordinates?: PathCoordinates;
}

type ScenarioEffectType =
  | 'add_card'
  | 'add_token'
  | 'add_journal_note'
  | 'add_xp'
  | 'add_trauma'
  | 'kill'
  | '...';

interface ScenarioEnemy {
  name: string;
}

interface ScenarioLocation {
  name: string;
}

interface PathCoordinates {
  x: number;
  y: number;
}
