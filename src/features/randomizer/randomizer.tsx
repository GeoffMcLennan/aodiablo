import React from 'react';

import { Button } from '@mui/material';

import { Attributes } from './attributes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { generateRandomAttributes, pickRandomSkill, RandomizerState, update } from './randomizerSlice';
import { Skill } from './skill';
import { allSkills, Skill as SkillType } from '../../data';
import { addToHistory } from '../history/historySlice';
import { updateLevel } from '../character/characterSlice';

export const Randomizer = () => {
  const { hero, level } = useAppSelector(state => state.character);
  const { skillLevels } = useAppSelector(state => state.history);
  const skills = allSkills[hero];
  const dispatch = useAppDispatch();

  const randomize = () => {

    const skillCandidates = generateCandidates(skills, level, skillLevels);
    const roll = {
      attributes: generateRandomAttributes(),
      skill: pickRandomSkill(skillCandidates),
    };
    // Update UI with latest roll
    dispatch(update(roll));
    dispatch(addToHistory(roll));
    dispatch(updateLevel(level + 1));
  }
  
  return (
    <div>
      <Attributes />
      <Skill />
      <Button onClick={randomize}>Randomize!</Button>
    </div>
  )
}

const generateCandidates = 
    (skills: Record<string, SkillType>, level: number, skillLevels: Record<string, number>)
        : Array<[string, SkillType]> => {
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