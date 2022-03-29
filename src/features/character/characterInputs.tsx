import React, { useState } from 'react';

import { MenuItem, Select, TextField } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  Hero,
  updateHero,
  updateName,
} from './characterSlice';

export const CharacterInputs = () => {
  const { hero, name, level } = useAppSelector(state => state.character);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Select 
          value={hero}
          label='Class'
          onChange={e => {
            dispatch(updateHero(e.target.value as Hero));
          }} >
        <MenuItem value='amazon'>Amazon</MenuItem>
      </Select>
      <TextField 
          value={name}
          label='Name'
          onChange={e => {
            dispatch(updateName(e.target.value));
          }} />
      <TextField 
          value={level}
          label='Level'
          disabled />
    </div>
  )
}