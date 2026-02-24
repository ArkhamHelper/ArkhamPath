import { useEffect, useState } from 'react';
import nightOfZealot from '../assets/campaigns/night_of_zealot.json';
import type { Scenario } from '../models/scenario';
import type { CycleJson } from '../models/json/cycleJson';
import type { Cycle } from '../models/cycle';
import type {
  ScenarioJson,
  ScenarioLineJson,
  ScenarioResolutionJson,
} from '../models/json/scenarioJson';

const CAMPAIGNS: Record<string, CycleJson> = {
  night_of_zealot: nightOfZealot as CycleJson,
};

export const useCycle = () => {
  const [cycleCode, setCycleCode] = useState<string>();
  const [scenarios, setScenarios] = useState<Scenario[]>();

  useEffect(() => {
    changeCycle('night_of_zealot');
  }, []);

  const changeCycle = (cycleCode: string) => {
    const cycleJson = CAMPAIGNS[cycleCode];

    if (!cycleJson) return;

    const cycle: Cycle = {
      code: cycleJson.code,
      scenarios: cycleJson.scenarios.map((scenario) => ({
        ...scenario,
        lines: scenario.lines.map((line) => transformLine(line, scenario)),
        blocks: scenario.blocks.map((block) => {
          if (block.blockType === 'resolution') {
            return transformResolution(
              block as ScenarioResolutionJson,
              cycleJson,
            );
          }
          return block;
        }),
      })),
      /**
       * @TODO Delete scenariosList
       */
      scenariosList: cycleJson.scenariosList,
    };

    setCycleCode(cycleCode);
    setScenarios(cycle.scenarios);
  };

  return { cycleCode, scenarios, changeCycle };
};

function transformLine(line: ScenarioLineJson, scenario: ScenarioJson) {
  return {
    startBlock: scenario.blocks.find((b) => b.code === line.startBlockCode)!,
    endBlock: scenario.blocks.find((b) => b.code === line.endBlockCode)!,
    ...line,
  };
}

function transformResolution(
  resolution: ScenarioResolutionJson,
  cycle: CycleJson,
) {
  return {
    ...resolution,
    conditions: resolution.conditions?.map((c) => ({
      blockType: 'effect',
      width: resolution.width,
      coordinates: resolution.coordinates,
      ...cycle.conditions.find((b) => b.code === c)!,
    })),
    effects: resolution.effects?.map((e) => ({
      blockType: 'effect',
      width: resolution.width,
      coordinates: resolution.coordinates,
      ...cycle.effects.find((b) => b.code === e)!,
    })),
  };
}
