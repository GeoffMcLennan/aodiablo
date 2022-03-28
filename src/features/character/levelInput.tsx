import React, { useState } from 'react';

import { Button, ButtonGroup, TextField } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  updateLevel,
  updateDisplayLevel
} from './character';

export const LevelInput = () => {
  const { level, displayLevel } = useAppSelector(state => state.character);
  const dispatch = useAppDispatch();

  return (
    <ButtonGroup>
      <Button
          onClick={e => {
            if (level > 1) {
              dispatch(updateLevel(level - 1))
            }
          }}
          disabled={level == 1} >-</Button>
      <TextField
          onBlur={e => {
            let val = parseInt(e.target.value);
            if (isNaN(val)) {
              val = level;
            }
            if (val < 1) {
              val = 1;
            }
            if (val > 99) {
              val = 99;
            }
            dispatch(updateLevel(val))
          }}
          onChange={e => {
            dispatch(updateDisplayLevel(e.target.value))
          }}
          value={displayLevel}
          defaultValue={level} />
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