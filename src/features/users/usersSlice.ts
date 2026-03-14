import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  role: string;
  status: string;
  searchText: string;
  pageNumber: number;
  pageSize: number;
}

const initialState: FilterState = {
  role: "",
  status: "99", // default
  searchText: "",
  pageNumber: 1,
  pageSize: 10,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Partial<FilterState>>) => {
      return { ...state, ...action.payload };
    },
    resetFilter: () => initialState,
  },
});

export const { setFilter, resetFilter } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
