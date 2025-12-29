import { useEffect, useState } from 'react';
import campaigns from '../assets/campaigns.json';
import type {
  Scenario,
  ScenarioEffect,
  ScenarioEvent,
} from '../models/scenario';
import type { CycleJson } from '../models/json/cycleJson';
import type { Cycle } from '../models/cycle';

export const useCycle = () => {
  const [cycleCode, setCycleCode] = useState<string>();
  const [scenarios, setScenarios] = useState<Scenario[]>();

  useEffect(() => {
    changeCycle('night_of_zealot');
  }, []);

  const changeCycle = (cycleCode: string) => {
    const cycleJson = campaigns.find((c) => c.code === cycleCode) as CycleJson;

    if (!cycleJson) return;

    const cycle: Cycle = {
      code: cycleJson.code,
      scenarios: cycleJson.scenarios.map((scenario) => ({
        ...scenario,
        resolutions: scenario.resolutions.map((resolution) => ({
          ...resolution,
          effects: resolution.effects
            ?.map((effectName) => {
              const effect = cycleJson.effects.find(
                (effect) => effect.code === effectName,
              );

              return {
                ...effect,
                conditions: effect?.conditions?.map((conditionName) =>
                  cycleJson.effects.find(
                    (effect) => effect.code === conditionName,
                  ),
                ),
              };
            })
            .filter(Boolean) as ScenarioEffect[],
          conditions: resolution.conditions
            ?.map((conditionName) =>
              cycleJson.effects.find((effect) => effect.code === conditionName),
            )
            .filter(Boolean) as ScenarioEvent[],
        })),
      })),
      scenariosList: cycleJson.scenariosList,
    };

    setCycleCode(cycleCode);
    setScenarios(cycle.scenarios);
  };

  return { cycleCode, scenarios, changeCycle };
};
