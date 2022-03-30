import { Button, MenuItem, Select } from "@mui/material"

import './persistor.css';

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { AppDispatch } from "../../app/store";
import { SaveState, updateSaveState } from "./persistorSlice";
import { CharacterState, loadSavedCharacter } from "../character/characterSlice";
import { HistoryState, loadSavedHistory } from "../history/historySlice";
import { loadSavedRandomizer } from "../randomizer/randomizerSlice";

const CREATE_NEW_KEY = 'create_new_key';

export const SaveSelector = () => {
  const character = useAppSelector(state => state.character);
  const { name } = character;
  const history = useAppSelector(state => state.history);
  const { saves } = useAppSelector(state => state.persistor);
  const dispatch = useAppDispatch();
  const save = saves.find(val => val[0] === name);
  if (!save) {
    saveCharacter(dispatch, history, character);
  }
  return (
    <div className='save-selector-container'>
      <Select
          value={save && save[0] || CREATE_NEW_KEY}
          onChange={(e) => {
            dispatch(updateSaveState({history, character}));
            const newSave = saves.find(val => val[0] === e.target.value);
            loadSave(dispatch, newSave);
          }} >
        {saves.map(saveVal => (
          <MenuItem value={saveVal[0]} key={saveVal[0]}>{saveVal[0]}</MenuItem>
        ))}
        <MenuItem value={CREATE_NEW_KEY} key={CREATE_NEW_KEY}>+ Create</MenuItem>
      </Select>
    </div>
  )
}

const saveCharacter = (dispatch: AppDispatch, history: HistoryState, character: CharacterState) => {
  dispatch(updateSaveState({history, character}));
}

const loadSave = (dispatch: AppDispatch, save: [string, SaveState] | undefined) => {
  dispatch(loadSavedCharacter(save?.[1].character));
  dispatch(loadSavedHistory(save?.[1].history));
  dispatch(loadSavedRandomizer(save?.[1].history));
}