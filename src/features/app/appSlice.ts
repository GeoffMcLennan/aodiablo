import { createSlice } from "@reduxjs/toolkit"

export interface AppState {
  readonly showHelpModal: boolean;
}

const initialState: AppState = {
  showHelpModal: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showHelpModal: (state) => {
      state.showHelpModal = true;
    },
    hideHelpModel: (state) => {
      state.showHelpModal = false;
    },
  }
});

export const { showHelpModal, hideHelpModel } = appSlice.actions;

export default appSlice.reducer;