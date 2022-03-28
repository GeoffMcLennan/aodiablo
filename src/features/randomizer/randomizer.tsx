import React from 'react';

import { Button } from '@mui/material';

import { Attributes } from './attributes';
import { useAppDispatch } from '../../app/hooks';
import { updateAttributes } from './randomizerSlice';
import { Skill } from './skill';

export const Randomizer = () => {
  const dispatch = useAppDispatch();

  const randomize = () => {
    dispatch(updateAttributes());
  }
  
  return (
    <div>
      <Attributes />
      <Skill />
      <Button onClick={randomize}>Randomize!</Button>
    </div>
  )
}