import React from 'react';

import { Button, Grid } from '@mui/material';

import './randomizer.css';

import { Attributes } from './attributes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AttributeState, generateRandomAttributes, pickRandomSkill, RandomizerState, RollState, setAnimationFrame, stopAnimation, update } from './randomizerSlice';
import { Skill } from './skill';
import { allSkills, Skill as SkillType, SkillArray } from '../../data';
import { addToHistory } from '../history/historySlice';
import { updateLevel } from '../character/characterSlice';
import { AppDispatch } from '../../app/store';
import { resolve } from 'path';

export const Randomizer = () => {
  const { hero, level } = useAppSelector(state => state.character);
  const { skillLevels } = useAppSelector(state => state.history);
  const skills = allSkills[hero];
  const dispatch = useAppDispatch();
  const skillCandidates = generateCandidates(skills, level, skillLevels);

  const randomize = async () => {
    const roll = {
      attributes: generateRandomAttributes(),
      skill: pickRandomSkill(skillCandidates),
    };
    // Update UI with latest roll
    await animate(dispatch, skillCandidates, roll);
    dispatch(update(roll));
    dispatch(addToHistory(roll));
    dispatch(updateLevel(level + 1));
  }
  
  return (
    <Grid container id='randomizer-grid'>
      <Grid item xs={12} sm={6}>
        <Attributes />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Skill skillCandidates={skillCandidates} />
      </Grid>
      <Grid item xs={12}>
        <Button variant='outlined' onClick={randomize}>Randomize!</Button>
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
  let currFrames = totalFrames;
  while (currFrames > 0) {
    await animateFrame(dispatch, candidates, roll, totalFrames, currFrames);
    currFrames--;
  }
  dispatch(stopAnimation());
}

const animateFrame = async (dispatch: AppDispatch, candidates: SkillArray, roll: RollState, totalFrames: number, currFrames: number) => {
  const animLength = 2000;
  return new Promise((res, reject) => {
    setTimeout(() => {
      const rollIndex = candidates.findIndex(value => value[0] === roll.skill);
      const currIndex = (rollIndex + currFrames) % candidates.length;
      dispatch(setAnimationFrame({
        isAnimating: true,
        animationSkill: candidates[currIndex][0],
        animationAttributes: generateAnimationAttributes(roll, currFrames),
      }));
      res(null);
    }, animLength / totalFrames);
  })
}

const generateAnimationAttributes = (roll: RollState, currFrames: number): AttributeState => {
  return {
    strength: (roll.attributes.strength + currFrames) % 6,
    dexterity: (roll.attributes.dexterity + currFrames) % 6,
    vitality: (roll.attributes.vitality + currFrames) % 6,
    energy: (roll.attributes.energy + currFrames) % 6,
  }
}