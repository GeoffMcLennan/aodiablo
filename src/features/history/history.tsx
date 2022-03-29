import React, { ReactFragment } from 'react';

import { useAppSelector } from '../../app/hooks';
import { allSkills } from '../../data';


export const History = () => {
  const { rolls, skillLevels } = useAppSelector(state => state.history);
  const { hero, level } = useAppSelector(state => state.character);
  const historyRows: Array<ReactFragment> = [];
  const rollsCopy = [...rolls];
  const skillLevelsCopy = {...skillLevels}
  let currLevel = level - 1;
  while (rollsCopy.length > 0) {
    const roll = rollsCopy.pop()!;
    const skillLevel = skillLevelsCopy[roll.skill];
    skillLevelsCopy[roll.skill]--;
    historyRows.push(
      <li key={currLevel}>
        Level {currLevel--} - 
        Str: {roll.attributes.strength} - 
        Dex: {roll.attributes.dexterity} - 
        Vit: {roll.attributes.vitality} - 
        Enr: {roll.attributes.energy} - 
        {allSkills[hero][roll.skill].name} (lvl {skillLevel})
      </li>
    )
  }

  return (
    <div>
      <ul>
        {historyRows}
      </ul>
    </div>
  )
}