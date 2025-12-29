export interface Scenario {
  id: string; //Заменить на code
  id_AC: string; //ID из ArkhamCards
  name: string; //Можно будет добавить разный цвет элементов схемы в зависимости от сложности
  difficulty: string;
  userResults: ScenarioResolution[]; //Результаты полученные пользователем
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
interface ScenarioResolution {
  title: string;
  number: number;
  effects?: ScenarioEffect[];
  conditions?: ScenarioEvent[];
}

interface ScenarioEvent {
  id: string;
  text: string;
  type: ScenarioEventType;
  isSpoiler?: boolean; //Возможно перенести в настройки пользователя

  /*
        Возможно убрать, так как нет таких событий

        + странно делать проверку, чтобы сделать проверку
        везде используется массив conditions, где легче проверить все условия 
    */
  condition?: ScenarioEvent;
}

type ScenarioEventType = 'have_journal_note' | 'on_win_score' | '...';

interface ScenarioEffect {
  id: string;
  text: string;
  type: ScenarioEffectType;
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

interface ScenarioEnemy {
  name: string;
}

interface ScenarioLocation {
  name: string;
}
