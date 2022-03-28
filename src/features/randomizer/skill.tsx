import React from 'react';

import { Grid } from '@mui/material';

import { allSkills, amazonSkills, Skill as SkillType } from '../../data';
import { useAppSelector } from '../../app/hooks';

export const Skill = () => {
  const { hero } = useAppSelector(state => state.character);
  const { skill } = useAppSelector(state => state.randomizer);
  const skills = allSkills[hero];
  return (
    <div>
      {skill !== '' && <div>
        <img src={skills[skill].image} />
        <h4>{skills[skill].name}</h4>
      </div>}
      {/* <Grid container>
        {Object.keys(amazonSkills).map(skill => (
          <SkillIcon skill={amazonSkills[skill]} />
        ))}
      </Grid> */}
    </div>
  )
}
interface SkillIconProps {
  skill: SkillType;
}
const SkillIcon = (props: SkillIconProps) => {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <img src={props.skill.image} />
      <h4>{props.skill.name}</h4>
    </Grid>
  )
}