import { Grid } from '@mui/material';
import { assassinSkills } from '../../data/assassin';
import { barbarianSkills } from '../../data/barbarian';
import { druidSkills } from '../../data/druid';
import { necromancerSkills } from '../../data/necromancer';
import { paladinSkills } from '../../data/paladin';
import { sorceressSkills } from '../../data/sorceress';


export const SkillDebug = () => {
  return (
    <Grid container>
      {Object.keys(sorceressSkills).map(skillKey => (
        <Grid item xs={6} md={4} lg={3}>
          <img src={sorceressSkills[skillKey].image} />
          <h4>{sorceressSkills[skillKey].name}</h4>
        </Grid>
      ))}
    </Grid>
  )
}