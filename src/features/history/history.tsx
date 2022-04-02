import { Button, Grid } from '@mui/material';
import React, { ReactFragment } from 'react';

import './history.css';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { allSkills } from '../../data';
import { AppDispatch } from '../../app/store';
import { incrementPromptState, popLastRoll } from './historySlice';
import { updateLevel } from '../character/characterSlice';
import { AttributeState } from '../randomizer/randomizerSlice';


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
    if (!roll.isSkillQuest && !roll.isAttributeQuest) {
      const skillLevel = skillLevelsCopy[roll.skill];
      const skillName = allSkills[hero][roll.skill].name;
      skillLevelsCopy[roll.skill]--;
      historyRows.push(
        <RegularRow 
            currLevel={currLevel--} 
            skillLevel={skillLevel}
            skillName={skillName}
            attributes={roll.attributes} />
      )
    }
    if (roll.isSkillQuest) {
      const skillLevel = skillLevelsCopy[roll.skill];
      const skillName = allSkills[hero][roll.skill].name;
      skillLevelsCopy[roll.skill]--;
      historyRows.push(
        <SkillQuestRow 
            currLevel={currLevel} 
            skillLevel={skillLevel}
            skillName={skillName} />
      )
    }
    if (roll.isAttributeQuest) {
      historyRows.push(
        <AttributeQuestRow 
            currLevel={currLevel}
            attributes={roll.attributes} />
      )
    }
  }

  let prompt: string = '';
  switch (promptState) {
    default:
    case 0:
      prompt = 'Undo last roll';
      break;
    case 1:
      prompt = 'Are you sure?';
      break;
    case 2:
      prompt = 'Its not that bad';
      break;
    case 3:
      prompt = 'Still sure?';
      break;
    case 4:
      prompt = 'Fine.';
      break;
  }

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

interface RegularRowProps {
  currLevel: number;
  skillName: string;
  skillLevel: number;
  attributes: AttributeState;
}
const RegularRow = (props: RegularRowProps) => {
  return (
    <Grid container item spacing={1} className='history-row' key={props.currLevel}>
      <Grid item xs={6} md={2}>
        Level {props.currLevel}
      </Grid>
      <Grid item xs={6} md={4}>
        {props.skillName} (lvl {props.skillLevel})
      </Grid>
      <Grid item xs={3} md={1.5}>
        Str: {props.attributes.strength}
      </Grid>
      <Grid item xs={3} md={1.5}>
        Dex: {props.attributes.dexterity}
      </Grid>
      <Grid item xs={3} md={1.5}>
        Vit: {props.attributes.vitality}
      </Grid>
      <Grid item xs={3} md={1.5}>
        Enr: {props.attributes.energy}
      </Grid>
    </Grid>
  )
}

interface SkillQuestRowProps {
  currLevel: number;
  skillName: string;
  skillLevel: number;
}
const SkillQuestRow = (props: SkillQuestRowProps) => {
  return (
    <Grid container item spacing={1} className='history-row' key={props.currLevel}>
      <Grid item xs={3} md={2}>
        Level {props.currLevel}
      </Grid>
      <Grid item xs={3} md={4}>
        Skill Quest
      </Grid>
      <Grid item xs={6} md={6}>
        {props.skillName} (lvl {props.skillLevel})
      </Grid>
    </Grid>
  )
}

interface AttributeQuestRowProps {
  currLevel: number;
  attributes: AttributeState;
}
const AttributeQuestRow = (props: AttributeQuestRowProps) => {
  return (
    <Grid container item spacing={1} className='history-row' key={props.currLevel}>
      <Grid item xs={6} md={2}>
        Level {props.currLevel}
      </Grid>
      <Grid item xs={6} md={4}>
        Attribute Quest
      </Grid>
      <Grid item xs={3} md={1.5}>
        Str: {props.attributes.strength}
      </Grid>
      <Grid item xs={3} md={1.5}>
        Dex: {props.attributes.dexterity}
      </Grid>
      <Grid item xs={3} md={1.5}>
        Vit: {props.attributes.vitality}
      </Grid>
      <Grid item xs={3} md={1.5}>
        Enr: {props.attributes.energy}
      </Grid>
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