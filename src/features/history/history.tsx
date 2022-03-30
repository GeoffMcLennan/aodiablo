import { Button, Grid } from '@mui/material';
import React, { ReactFragment } from 'react';

import './history.css';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { allSkills } from '../../data';
import { AppDispatch } from '../../app/store';
import { incrementPromptState, popLastRoll } from './historySlice';
import { updateLevel } from '../character/characterSlice';


export const History = () => {
  const { rolls, skillLevels, promptState } = useAppSelector(state => state.history);
  const { hero, level } = useAppSelector(state => state.character);
  const dispatch = useAppDispatch();
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

  console.log(promptState)
  let prompt: string = '';
  switch (promptState) {
    default:
    case 0:
      console.log(0)
      prompt = 'Undo last roll';
      break;
    case 1:
      console.log(1)
      prompt = 'Are you sure?';
      break;
    case 2:
      console.log(2)
      prompt = 'Its not that bad';
      break;
    case 3:
      console.log(3)
      prompt = 'Still sure?';
      break;
    case 4:
      console.log(4)
      prompt = 'Fine.';
      break;
  }
  console.log(prompt)

  return (
    <Grid container className='history-container'>
      <Grid container item xs={12}>
        <Grid item xs={6} sm={8} md={9}>
          <h2>History</h2>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Button 
              variant='outlined' 
              onClick={e => clickUndo(dispatch, promptState, level)} 
              disabled={rolls.length === 0}>
            {prompt}
          </Button>
        </Grid>
      </Grid>
      {historyRows}
    </Grid>
  )
}

const clickUndo = (dispatch: AppDispatch, promptState: number, level: number) => {
  if (promptState === 4) {
    dispatch(popLastRoll());
    dispatch(updateLevel(level - 1))
  }
  dispatch(incrementPromptState());
}