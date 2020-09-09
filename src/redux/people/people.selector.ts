import { RootState } from "../root.reducer";
import { createSelector } from "reselect";

const selectPeopleState = (state: RootState) => state.people;

export const selectPeople = createSelector([selectPeopleState], (data) => data.people);

export const selectPeoplePage = createSelector([selectPeopleState], (data) => data.total / 10);

export const selectCurrentPeoplePage = createSelector(
  [selectPeopleState],
  (data) => data.currentPage
);
