import React from 'react';

import { Button, Grid } from '@mui/material';

import './randomizer.css';

import { Attributes } from './attributes';
import { useAppDispatch, useAppSelector, useAsyncState } from '../../app/hooks';
import { AttributeState, generateRandomAttributes, pickRandomSkill, RollState, setAnimationFrame, stopAnimation, update } from './randomizerSlice';
import { Skill } from './skill';
import { allSkills, Skill as SkillType, SkillArray } from '../../data';
import { AppDispatch } from '../../app/store';

export const Randomizer = () => {
  const character = useAppSelector(state => state.character);
  const { hero, level } = character;
  const { skillLevels } = useAppSelector(state => state.history);
  const { animation } = useAppSelector(state => state.randomizer);
  const skills = allSkills[hero];
  const dispatch = useAppDispatch();
  const skillCandidates = generateCandidates(skills, level, skillLevels);

  const randomize = async (props: {isSkillQuest?: boolean, isAttributeQuest?: boolean}) => {
    const {isSkillQuest, isAttributeQuest } = props;
    const roll: RollState = {
      attributes: isSkillQuest ? generateEmptyAttributes() : generateRandomAttributes(),
      skill: isAttributeQuest ? '' : pickRandomSkill(skillCandidates),
      isSkillQuest,
      isAttributeQuest,
    };
    await animate(dispatch, skillCandidates, roll);
    dispatch(update(roll));
  }

  const disableButtons = animation?.isAnimating || level >= 100;
  
  return (
    <Grid container id='randomizer-grid'>
      <Grid item xs={12} sm={6} className='attribute-grid-item'>
        <Attributes />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Skill skillCandidates={skillCandidates} />
      </Grid>
      <Grid item xs={12}>
        <div className='button-container gamble-button-container' id='main-gamble'>
          <Button className='gamble-button button-container' id='main-gamble' onClick={e => randomize({})} disabled={disableButtons}>Gamble!</Button>
        </div>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12} className='solo-button-container' sx={{display: {xs: 'flex', sm: 'none'}}}>
          <div className='button-container gamble-button-container solo'>
            <Button className='gamble-button solo' onClick={e => randomize({isAttributeQuest: true})} disabled={disableButtons}>Attribute Quest!</Button>
          </div>
        </Grid>
        <Grid item xs={12} className='solo-button-container' sx={{display: {xs: 'flex', sm: 'none'}}}>
          <div className='button-container gamble-button-container solo'>
            <Button className='gamble-button solo' onClick={e => randomize({isSkillQuest: true})} disabled={disableButtons}>Skill Quest!</Button>
          </div>
        </Grid>
        <Grid item sm={12} className='shared-button-container' sx={{display: {xs: 'none', sm: 'flex'}}}>
          <div className='button-container gamble-button-container shared'>
            <Button className='gamble-button shared' onClick={e => randomize({isAttributeQuest: true})} disabled={disableButtons}>Attribute Quest!</Button>
          </div>
          <div className='button-container gamble-button-container shared'>
            <Button className='gamble-button shared' onClick={e => randomize({isSkillQuest: true})} disabled={disableButtons}>Skill Quest!</Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

const generateCandidates = 
    (skills: Record<string, SkillType>, level: number, skillLevels: Record<string, number>)
        : SkillArray => {
  return Object.keys(skills).reduce((candidates, skillKey) => {
    // Filter out skills above the level requirement
    if (skills[skillKey].requiredLevel > level) {
      return candidates;
    }
    // Filter out skills that the prereqs aren't met
    const requiredSkills = skills[skillKey].requiredSkills;
    if (!requiredSkills.reduce((meetsRequirements, prereq) => (meetsRequirements && skillLevels[prereq] > 0), true)) {
      return candidates;
    }
    // Exclude skills if they are already level 20
    if (skillLevels[skillKey] > 19) {
      return candidates;
    }
    // If all requirements are met, add skill to candidate list
    candidates.push([skillKey, skills[skillKey]]);
    return candidates;
  }, [] as Array<[string, SkillType]>)
}

const animate = async (dispatch: AppDispatch, candidates: SkillArray, roll: RollState) => {
  const totalFrames = 40;
  // const totalFrames = 10
  let currFrames = totalFrames;
  while (currFrames > 0) {
    await animateFrame(dispatch, candidates, roll, totalFrames, currFrames);
    currFrames--;
  }
}

const animateFrame = async (dispatch: AppDispatch, candidates: SkillArray, roll: RollState, totalFrames: number, currFrames: number) => {
  const animLength = 2000;
  // const animLength = 5000;
  const rollIndex = candidates.findIndex(value => value[0] === roll.skill);
  const currIndex = (rollIndex + currFrames) % candidates.length;
  dispatch(setAnimationFrame({
    isAnimating: true,
    isAnimatingSkill: !roll.isAttributeQuest,
    isAnimatingAttributes: !roll.isSkillQuest,
    animationSkill: candidates[currIndex][0],
    animationAttributes: generateAnimationAttributes(roll, currFrames),
  }));
  return new Promise((res, reject) => {
    setTimeout(() => {
      res(null);
    }, animLength / totalFrames);
  })
}

const generateAnimationAttributes = (roll: RollState, currFrames: number): AttributeState => {
  return {
    strength: (roll.attributes.strength + currFrames) % 6,
    dexterity: Math.abs((roll.attributes.dexterity - currFrames) % 6),
    vitality: (roll.attributes.vitality + currFrames) % 6,
    energy: Math.abs((roll.attributes.energy - currFrames) % 6),
  }
}

const generateEmptyAttributes = () => {
  return {
    strength: 0,
    dexterity: 0,
    vitality: 0,
    energy: 0,
  }
}