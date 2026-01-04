export interface Scenario {
  code: string;
  id_AC: string; //ID из ArkhamCards
  lines: string[][];
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

/**
 * @todo Заменить number на code, так как бывают разные исходы при проигрыше.
 * Например "Все сыщики побеждены или побег" и "Все сыщики побеждены или побег + есть кто побег"
 */
export interface ScenarioResolution {
  code: string;
  title: string;
  width: number;
  pathCoordinates: PathCoordinates;
  effects?: ScenarioEffect[];
  conditions?: ScenarioEvent[];
}

export interface ScenarioEvent {
  code: string;
  text: string;
  width: number;
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

export interface ScenarioEffect {
  code: string;
  text: string;
  type: ScenarioEffectType;
  count?: number;
  conditions?: ScenarioEvent[];
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
