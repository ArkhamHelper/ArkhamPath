#!/usr/bin/env node

import fs from 'fs';

const FILE_PATH = '../assets/campaigns.json';

const args = process.argv.slice(2);
const [scenarioCode, direction, operation, value, afterBlockCode] = args;
const campaigns = JSON.parse(
  fs.readFileSync(FILE_PATH, 'utf8'),
);
const scenario = campaigns
  .map(campaign => campaign.scenarios)
  .flat()
  .find(scenario => scenario.code === scenarioCode);
const afterBlock = scenario.blocks.find(block => block.code === afterBlockCode);

updateBlocks(scenario, direction, operation, value, afterBlock);
updateLines(scenario, direction, operation, value, afterBlock);

fs.writeFileSync(FILE_PATH, JSON.stringify(campaigns, null, 2), 'utf8');

function updateBlocks(scenario, direction, operation, value, afterBlock) {
  let blocksFilter;

  if (!afterBlock) {
    blocksFilter = true;
  } else {
    const afterBlockCoordinates = afterBlock.coordinates[direction];

    blocksFilter = block => operation === '+'
      ? block.coordinates[direction] >= afterBlockCoordinates
      : block.coordinates[direction] <= afterBlockCoordinates;
  }

  scenario.blocks
    .filter(blocksFilter)
    .forEach(block =>
      block.coordinates[direction] += value * (operation === '+' ? 1 : -1));
}

function updateLines(scenario, direction, operation, value, afterBlock) {
  let linesFilter;

  if (!afterBlock) {
    linesFilter = true;
  } else {
    const afterBlockCoordinates = afterBlock.coordinates[direction];

    linesFilter = line => operation === '+'
      ? line[`controlPoint${direction.toUpperCase()}`] >= afterBlockCoordinates
      : line[`controlPoint${direction.toUpperCase()}`] <= afterBlockCoordinates;
  }

 scenario.lines
  .filter(linesFilter)
  .forEach(line => 
    line[`controlPoint${direction.toUpperCase()}`] += value * (operation === '+' ? 1 : -1)
  )
}
