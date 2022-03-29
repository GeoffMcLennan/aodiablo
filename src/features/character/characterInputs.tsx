import React, { useState } from 'react';

import { MenuItem, Select, TextField } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  Hero,
  updateHero,
  updateLevel,
} from './characterSlice';
import { LevelInput } from './levelInput';

export const CharacterInputs = () => {
  const { hero } = useAppSelector(state => state.character);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Select 
          value={hero}
          onChange={e => {
            dispatch(updateHero(e.target.value as Hero));
          }} >
        <MenuItem value='amazon'>Amazon</MenuItem>
      </Select>
      <LevelInput />
    </div>
  )
}