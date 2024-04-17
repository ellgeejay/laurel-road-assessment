import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  age: '',
  schoolName: '',
  gradYear: '',
  annualIncome: '',
  jobTitle: '',
};

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
