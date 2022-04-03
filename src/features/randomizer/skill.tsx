import React from 'react';

import { Grid } from '@mui/material';

import './randomizer.css';

import { allSkills, Skill as SkillType, SkillArray } from '../../data';
import { useAppSelector } from '../../app/hooks';

interface SkillProps {
  skillCandidates: SkillArray;
}
export const Skill = (props: SkillProps) => {
  const { skill, animation } = useAppSelector(state => state.randomizer);
  const { hero } = useAppSelector(state => state.character);
  const skills = allSkills[hero];
  let image: string, name: string, selectedSkill: string;
  if (animation && animation.isAnimatingSkill) {
    selectedSkill = animation.animationSkill;
    image = skills[animation.animationSkill].image;
    name = '';
  } else {
    selectedSkill = skill === '' ? props.skillCandidates[0][0] : skill;
    const selected = skill === ''
        ? props.skillCandidates[0][1] 
        : skills[skill];
    image = selected.image;
    name = skill === '' ? '' : selected.name;
  }
  return (
    <div className='skill-roulette-container'>
      <SkillRoulette skillCandidates={props.skillCandidates} selectedSkill={selectedSkill}  animate={animation?.isAnimatingSkill || false} />
      <SkillRouletteOverlay name={name} />
    </div>
  )
}

interface SkillRouletteProps {
  skillCandidates: SkillArray;
  selectedSkill: string;
  animate: boolean;
}
export const SkillRoulette = (props: SkillRouletteProps) => {
  const selectedIndex = props.skillCandidates.findIndex(val => val[0] === props.selectedSkill);
  const topIndex = selectedIndex > 0 ? selectedIndex - 1 : props.skillCandidates.length - 1;
  const bottomIndex = selectedIndex < (props.skillCandidates.length - 1) ? selectedIndex + 1 : 0;
  return (
    <div className='outer-roulette-container'>
      <div className='inner-roulette-container'>
        <img className={`roulette-image ${props.animate ? 'animate' : ''}`} id='top' src={props.skillCandidates[topIndex][1].image} />
        <img className='roulette-image' id='middle' src={props.skillCandidates[selectedIndex][1].image} />
        <img className='roulette-image' id='bottom' src={props.skillCandidates[bottomIndex][1].image} />
      </div>
    </div>
  )
}

interface OverlayProps {
  name: string;
}
export const SkillRouletteOverlay = (props: OverlayProps) => {
  return (
    <div className='overlay-container'>
      <div className='top-chunk' />
      <div className='window button-container' />
      <div className='bottom-chunk'>
        <div className='skill-label-container text-container'>
          <h4 className='skill-label'>{props.name}</h4>
        </div>
      </div>
    </div>
  )
}