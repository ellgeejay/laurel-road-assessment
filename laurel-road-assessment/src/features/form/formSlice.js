import { createSlice } from '@reduxjs/toolkit';

// setting initial state for application
const initialState = {
  firstName: '',
  lastName: '',
  age: '',
  schoolName: '',
  gradYear: '',
  annualIncome: '',
  jobTitle: '',
};

// creating a slice to then apply our actions to, then export as a reducer
export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { updateField } = formSlice.actions;
export default formSlice.reducer;
