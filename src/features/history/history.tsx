import { Grid } from '@mui/material';
import React, { ReactFragment } from 'react';

import './history.css';

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
      <Grid container item spacing={1} key={currLevel}>
        <Grid item xs={4} md={2}>
          Level {currLevel--}
        </Grid>
        <Grid item xs={8} md={4}>
          {allSkills[hero][roll.skill].name} (lvl {skillLevel})
        </Grid>
        <Grid item xs={3} md={1.5}>
          Str: {roll.attributes.strength}
        </Grid>
        <Grid item xs={3} md={1.5}>
          Dex: {roll.attributes.dexterity}
        </Grid>
        <Grid item xs={3} md={1.5}>
          Vit: {roll.attributes.vitality}
        </Grid>
        <Grid item xs={3} md={1.5}>
          Enr: {roll.attributes.energy}
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid container className='history-container'>
      {historyRows}
    </Grid>
  )
}