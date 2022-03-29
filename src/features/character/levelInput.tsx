import React, { useState } from 'react';

import { Button, ButtonGroup, TextField } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  updateLevel,
  updateDisplayLevel
} from './characterSlice';

export const LevelInput = () => {
  const { level, displayLevel } = useAppSelector(state => state.character);
  const dispatch = useAppDispatch();

  return (
    <ButtonGroup>
      <Button
          onClick={e => {
            if (level > 2) {
              dispatch(updateLevel(level - 1))
            }
          }}
          disabled={level <= 2} >-</Button>
      <TextField
          onBlur={e => {
            let val = parseInt(e.target.value);
            if (isNaN(val)) {
              val = level;
            }
            if (val < 2) {
              val = 2;
            }
            if (val > 99) {
              val = 99;
            }
            dispatch(updateLevel(val))
          }}
          onChange={e => {
            dispatch(updateDisplayLevel(e.target.value))
          }}
          value={displayLevel} />
      <Button
          onClick={e => {
            if (level < 99) {
              dispatch(updateLevel(level + 1))
            }
          }}
          disabled={level == 99} >+</Button>
    </ButtonGroup>
  )
}