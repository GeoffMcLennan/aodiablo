import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AttributeState {
  strength: number;
  dexterity: number;
  vitality: number;
  energy: number;
}

export interface RandomizerState {
  attributes: AttributeState;
}

const initialState: RandomizerState = {
  attributes: {
    strength: 0,
    dexterity: 0,
    vitality: 0,
    energy: 0,
  }
}

export const randomizerSlice = createSlice({
  name: 'randomizer',
  initialState,
  reducers: {
    updateAttributes: (state) => {
      state.attributes = generateRandomAttributes();
    }
  }
});

export const generateRandomAttributes = (): AttributeState => {
  let strRand = Math.random();
  let dexRand = Math.random();
  let vitRand = Math.random();
  let ergRand = Math.random();
  let total = strRand + dexRand + vitRand + ergRand;
  strRand *= 5 / total;
  dexRand *= 5 / total;
  vitRand *= 5 / total;
  ergRand *= 5 / total;
  console.log(`Str: ${strRand}\nDex: ${dexRand}\nVit: ${vitRand}\nErg: ${ergRand}`)
  strRand = Math.round(strRand);
  dexRand = Math.round(dexRand);
  vitRand = Math.round(vitRand);
  ergRand = Math.round(ergRand);
  total = strRand + dexRand + vitRand + ergRand;
  console.log(total)
  if (total < 5) {
    console.log('Total less than five');
    const arr = [strRand, dexRand, vitRand, ergRand];
    const num = Math.floor(Math.random() * 4);
    console.log(`Adding to index ${num}`);
    arr[num] += 1;
    [strRand, dexRand, vitRand, ergRand] = arr;
  }
  while(total > 5) {
    console.log('Total greater than five');
    const arr = [strRand, dexRand, vitRand, ergRand];
    const num = Math.floor(Math.random() * 4);
    console.log('Attempting subtract from index ' + num);
    if (arr[num] > 0) {
      arr[num] -= 1;
    } else {
      console.log('Can\'t subtract, number already 0');
    }
    [strRand, dexRand, vitRand, ergRand] = arr;
    total = strRand + dexRand + vitRand + ergRand;
  }
  return {
    strength: strRand,
    dexterity: dexRand,
    vitality: vitRand,
    energy: ergRand,
  }
}

export const { updateAttributes } = randomizerSlice.actions;

export default randomizerSlice.reducer;