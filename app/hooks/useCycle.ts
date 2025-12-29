import { useState } from 'react';
import type { Cycle } from '../models/cycle';
import campaigns from '../assets/campaigns/campaigns.json';

export const useCycle = () => {
  const [scenarios, setScenarios] = useState<string[]>([]);

  const changeCycle = async (cycleCode: string) => {
    const cycle: Cycle | undefined = campaigns.find(
      (c) => c.code === cycleCode,
    );

    if (!cycle) return;

    setScenarios(cycle.scenarios);
  };

  return { scenarios, changeCycle };
};
