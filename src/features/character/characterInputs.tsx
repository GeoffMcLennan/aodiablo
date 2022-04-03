import React, { useState } from 'react';

import { MenuItem, Select, TextField } from '@mui/material';

import './character.css';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  Hero,
  updateHero,
  updateName,
} from './characterSlice';
import { updateSaveName } from '../persistor/persistorSlice';

export const CharacterInputs = () => {
  const { hero, name, level } = useAppSelector(state => state.character);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Select 
          value={hero}
          label='Class'
          className='character-class-input'
          disabled={level > 2}
          onChange={e => {
            dispatch(updateHero(e.target.value as Hero));
          }} >
        <MenuItem value='amazon'>Amazon</MenuItem>
        <MenuItem value='assassin'>Assassin</MenuItem>
        <MenuItem value='barbarian'>Barbarian</MenuItem>
        <MenuItem value='druid'>Druid</MenuItem>
        <MenuItem value='necromancer'>Necromancer</MenuItem>
        <MenuItem value='paladin'>Paladin</MenuItem>
        <MenuItem value='sorceress'>Sorceress</MenuItem>
      </Select>
      <TextField 
          value={name}
          label='Name'
          className='character-name-input'
          onChange={e => {
            dispatch(updateName(e.target.value));
            dispatch(updateSaveName({oldName: name, newName: e.target.value}));
          }} />
      <TextField 
          value={level - 1}
          label='Level'
          id='levelField'
          disabled />
    </div>
  )
}